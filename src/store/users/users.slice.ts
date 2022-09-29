// DUCKS pattern
import {createSlice} from "@reduxjs/toolkit";

import {Anime} from "@models/Anime";

import {RootState} from "@my-store/store";

export interface IAppState {
   records: Anime[];
   data: any;
   firstLoad: boolean;
}

const initialState: IAppState = {
   records: [],
   data: {},
   firstLoad: true,
};

// slice
export const appSlice = createSlice({
   name: "user",
   initialState,
   reducers: {},
});

//Actions
export const appAction = {
   //    fetchAllSucceeded: appSlice.actions.fetchAllSucceeded,
   //    fetchMore: appSlice.actions.fetchMore,
   //    search: appSlice.actions.search,
};

// Selectors

// Reducer
export default appSlice.reducer;
