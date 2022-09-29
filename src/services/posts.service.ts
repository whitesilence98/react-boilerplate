import axios from "axios";
import _get from "lodash/get";

import {ListResponse} from "@models/common";
import {Post} from "@models/post";

import {serializeQueryString} from "@utils/common.utils";

const API_BASE_URL = "https://api.jikan.moe/v4";

const SEARCH_BASE_URL = `/anime`;

export const searchPosts = (params: any): Promise<ListResponse<Post>> => {
   const queryString = params && `?${serializeQueryString(params)}`;
   return axios.get(`${API_BASE_URL}${SEARCH_BASE_URL}${queryString}&genres=12&order_by=end_date`);
};

export const createPost = (param: any): void => {};

export const updatePost = (param: any): void => {};

export const deletePost = (param: any): void => {};
