// import axios from '@utils/axios.utils';
import axios from "axios";
import _get from "lodash/get";

import {ListResponse} from "@models/common";
import {Anime} from "@models/Anime";

import {serializeQueryString} from "@utils/common.utils";

const API_BASE_URL = "http://localhost:3001/api/v1";

const SEARCH_BASE_URL = `/product`;

export const searchAnime = (params: any): Promise<ListResponse<Anime>> => {
   const queryString = params && `?${serializeQueryString(params)}`;
   return axios.get(`${API_BASE_URL}${SEARCH_BASE_URL}${queryString}&genres=12&order_by=end_date`);
};
