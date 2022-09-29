// DUCKS pattern
import {createAction, createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";

import {Anime} from "@models/Anime";
import {FilterParams, PaginationParams} from "@models/common";

import {RootState} from "@my-store/store";

export interface IAnimeState {
   records: Anime[];
   loading: boolean;
   firstLoad: boolean;
   params: PaginationParams & FilterParams;
}

const initialState: IAnimeState = {
   records: [],
   loading: false,
   firstLoad: true,
   params: {
      q: "",
      page: 1,
      limit: 10,
      total: 0,
   },
};

// slice
export const animeSlice = createSlice({
   name: "animes",
   initialState,
   reducers: {
      fetchAllSucceeded(state, {payload: {pagination: params, data: records}}: PayloadAction<any>) {
         state.records = records;
         if (state.firstLoad) state.firstLoad = false;
         state.loading = false;
      },
      fetchMore(state, {payload: {pagination: params, data: posts}}: PayloadAction<any>) {
         state.params = {
            ...state.params,
            page: params.current_page,
            hasNext: !!params.has_next_page,
            total: params.items.total,
         };
         state.records = [...state.records, ...posts];
         state.loading = false;
      },
      search(state, {payload}: PayloadAction<any>) {
         state.params = {...state.params, ...payload};
         state.loading = true;
      },
   },
});

//Actions
export const animeActions = {
   fetchAllSucceeded: animeSlice.actions.fetchAllSucceeded,
   fetchMore: animeSlice.actions.fetchMore,
   search: animeSlice.actions.search,
   create: createAction(`${animeSlice.name}/create`, (post: Anime) => ({
      payload: {id: nanoid()},
   })),
   update: createAction<Anime>(`${animeSlice.name}/update`),
   delete: createAction<Anime>(`${animeSlice.name}/delete`),
};

// Selectors
export const selectAnimeList = (state: RootState) => state.animes.records;
export const selectAnimeParams = (state: RootState) => state.animes.params;

// Reducer
export default animeSlice.reducer;
