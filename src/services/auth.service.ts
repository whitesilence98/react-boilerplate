import axios from "@utils/axios.utils";
import _get from "lodash/get";

import {DataResponse} from "@models/common";
import {User} from "@models/user";

const POST_USER_EXAMPLE = {name: "hello", email: "email@email.com", password: "example", confirmPassword: "example"};
const LOGIN_EXAMPLE = {email: "email@email.com", password: "example"};

export const signin = async (params: Partial<typeof POST_USER_EXAMPLE>) => {
   try {
      await axios.post("/api/v1/user", params);
      return {success: true, error: null};
   } catch (error) {
      return {success: false, error};
   }
};

export const signIn = async (params: Partial<typeof LOGIN_EXAMPLE>): Promise<DataResponse<User | null>> => {
   try {
      const response = await axios.post("/api/v1/auth/login", params);
      const token = _get(response.data, "token", "");
      const user = _get(response.data, "data.user", {});
      return {success: true, data: {user, token}, errors: null};
   } catch (errors) {
      return {success: false, data: null, errors};
   }
};
