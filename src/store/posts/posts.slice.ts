// DUCKS pattern
import {createAction, createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";

import {Post} from "@models/post";
import {FilterParams, PaginationParams} from "@models/common";
import {RootState} from "@my-store/store";

export interface PostsState {
   posts: Post[];
   loading: boolean;
   firstLoad: boolean;
   params: PaginationParams & FilterParams;
}

const initialState: PostsState = {
   posts: [],
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
export const postsSlice = createSlice({
   name: "posts",
   initialState,
   reducers: {
      fetchAllSucceeded(state, {payload: {pagination: params, data: posts}}: PayloadAction<any>) {
         state.posts = posts;
         state.params = {
            ...state.params,
            page: params.current_page,
            hasNext: !!params.has_next_page,
            total: params.items.total,
         };
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
         state.posts = [...state.posts, ...posts];
         state.loading = false;
      },
      changeParams(state, {payload}: PayloadAction<any>) {
         state.params = {...state.params, ...payload};
         state.loading = true;
      },
      search(state, {payload}: PayloadAction<any>) {
         state.params = {...state.params, ...payload};
         state.loading = true;
         state.firstLoad = true;
      },
   },
});

//Actions
export const postsActions = {
   fetchAllSucceeded: postsSlice.actions.fetchAllSucceeded,
   fetchMore: postsSlice.actions.fetchMore,
   search: postsSlice.actions.search,
   changeParams: postsSlice.actions.changeParams,
   create: createAction(`${postsSlice.name}/create`, (post: Post) => ({
      payload: {id: nanoid()},
   })),
   update: createAction<Post>(`${postsSlice.name}/update`),
   delete: createAction<Post>(`${postsSlice.name}/delete`),
};

// Selectors
export const selectPostsValue = (state: RootState) => state.posts.posts;
export const selectPostsFirstLoad = (state: RootState) => state.posts.firstLoad;
export const selectPostsLoading = (state: RootState) => state.posts.loading;
export const selectPostsParams = (state: RootState) => state.posts.params;

// Reducer
export default postsSlice.reducer;
