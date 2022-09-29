import {SagaIterator} from "@redux-saga/core";
import {call, put, takeEvery, select, delay, debounce} from "redux-saga/effects";

import {createPost, deletePost, searchPosts, updatePost} from "@services/posts.service";
import {postsActions, selectPostsParams} from "./posts.slice";
import {Post} from "@models/post";
import _get from "lodash/get";
import {searchManga} from "@services/product.service";

interface PostSagaReturn<T> {
   type: T;
   payload: Post;
}

export function* onSearchPost({payload}: PostSagaReturn<typeof postsActions.search>): SagaIterator {
   const params = yield select(selectPostsParams);
   const posts: Post[] = yield call(searchManga, {...params, ...payload});
   const data = _get(posts, "data.data", []);
   const pagination = _get(posts, "data.pagination", []);
   yield put(postsActions.fetchAllSucceeded({data, pagination}));
}

export function* onChangeParams({payload}: PostSagaReturn<typeof postsActions.changeParams>): SagaIterator {
   console.log("WinLog 🐳🐳🐳 ~ payload", payload);
   const params = yield select(selectPostsParams);
   const posts: Post[] = yield call(searchPosts, {...params, ...payload});
   const data = _get(posts, "data.data", []);
   const pagination = _get(posts, "data.pagination", []);
   yield put(postsActions.fetchMore({data, pagination}));
}

function* onCreatePost({payload}: {type: typeof postsActions.create; payload: Post}): SagaIterator {
   yield call(createPost, payload);
   // yield put(postsActions.fetchAll());
}

function* onUpdatePost({payload}: {type: typeof postsActions.update; payload: Post}): SagaIterator {
   yield call(updatePost, payload);
   // yield put(postsActions.fetchAll());
}

function* onDeletePost({payload}: {type: typeof postsActions.delete; payload: Post}): SagaIterator {
   yield call(deletePost, payload);
   // yield put(postsActions.fetchAll());
}

// Watcher Saga
export function* postsWatcherSaga(): SagaIterator {
   yield takeEvery(postsActions.search.type, onSearchPost);
   // yield debounce(500, postsActions.changeParams.type, onChangeParams);
   yield takeEvery(postsActions.changeParams.type, onChangeParams);
   yield takeEvery(postsActions.update.type, onUpdatePost);
   yield takeEvery(postsActions.delete.type, onDeletePost);
   yield takeEvery(postsActions.create.type, onCreatePost);
}

export default postsWatcherSaga;
