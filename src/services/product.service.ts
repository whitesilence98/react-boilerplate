import {ListResponse} from "@models/common";

// import axios from '@utils/axios.utils';
import axios from "axios";

import {Post} from "@models/post";

import _get from "lodash/get";
import {serializeQueryString} from "@utils/common.utils";

const API_BASE_URL = "http://localhost:3001/api/v1";

const SEARCH_BASE_URL = `/product`;

export const searchManga = (params: any): Promise<ListResponse<Post>> => {
   const queryString = params && `?${serializeQueryString(params)}`;
   // return axios.get(`${API_BASE_URL}${SEARCH_BASE_URL}${queryString}&genres=12&order_by=end_date`);
   return axios.get(`${API_BASE_URL}${SEARCH_BASE_URL}${queryString}`);
};

export const createPost = (param: any): void => {};

export const updatePost = (param: any): void => {};

export const deletePost = (param: any): void => {};
