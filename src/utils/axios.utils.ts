import axios, {AxiosResponse, AxiosRequestConfig, AxiosError} from "axios";
import _get from "lodash/get";
import {normalizeError} from "./normalize.utils";

import {ROUTERS, KEYS, HTTP_RESPONSE} from "@constants";
import {getItem} from "./localStorage.utils";

// const API_BASE_URL = "https://r34-json-api.herokuapp.com";
const API_BASE_URL = "http://localhost:3001";

const instance = axios.create({
   baseURL: `${API_BASE_URL}`,
   withCredentials: false,
});

function handleBeforeCallApi() {
   // Add a request interceptor
   instance.interceptors.request.use(
      function (config: AxiosRequestConfig) {
         // Do something before request is sent
         const token = getItem(KEYS.TOKEN);
         const configHeaders = config.headers;
         config.headers = {
            ...configHeaders,
            Authorization: token || "",
         };

         return config;
      },
      function (error: AxiosError) {
         // Do something with request error
         return Promise.reject(error);
      },
   );
}

function handleAfterCallApi() {
   // Add a response interceptor
   instance.interceptors.response.use(
      (response: AxiosResponse) => {
         // Any status code that lie within the range of 2xx cause this function to trigger
         // Do something with response data
         return response;
      },
      (error: AxiosError) => {
         // Any status codes that falls outside the range of 2xx cause this function to trigger
         // Do something with response error
         return Promise.reject(handleDataError(error));
      },
   );
}

export function handleDataError(error: AxiosError) {
   let message;
   if (error.response) {
      console.log("WinLog 🐳🐳🐳 ~ error.response.status", error.response.status);

      if (error.response.status === HTTP_RESPONSE.Forbidden) {
         message = "You don't have permission to access";
         window.location.href = ROUTERS.Forbidden;
      } else if (error.response.status === HTTP_RESPONSE.InternalServerError) {
         message = "Internal Server Error";
      } else {
         const errors = _get(error.response, "data", {});
         const normalize = normalizeError(errors);
         message = normalize;
      }
   }
   if (!message || message.length < 1) {
      return {message: "Oops, something went wrong"};
   }

   return message;
}

handleBeforeCallApi();
handleAfterCallApi();

export default instance;
