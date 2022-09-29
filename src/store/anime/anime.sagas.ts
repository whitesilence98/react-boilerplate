import {SagaIterator} from "@redux-saga/core";
import {call, put, takeEvery, select} from "redux-saga/effects";
import _get from "lodash/get";

import {createPost, deletePost, updatePost} from "@services/posts.service";
import {searchAnime} from "@services/anime.service";

import {animeActions, selectAnimeParams} from "./anime.slice";

import {Anime} from "@models/Anime";

interface AnimeSagaReturn<T> {
   type: T;
   payload: Anime;
}

export function* onSearchPost({payload}: AnimeSagaReturn<typeof animeActions.search>): SagaIterator {
   const params = yield select(selectAnimeParams);
   const animes: Anime[] = yield call(searchAnime, {...params, ...payload});
   const data = _get(animes, "data.data", []);
   const pagination = _get(animes, "data.pagination", []);
   yield put(animeActions.fetchAllSucceeded({data, pagination}));
}

function* onCreatePost({payload}: {type: typeof animeActions.create; payload: Anime}): SagaIterator {
   yield call(createPost, payload);
}

function* onUpdatePost({payload}: {type: typeof animeActions.update; payload: Anime}): SagaIterator {
   yield call(updatePost, payload);
}

function* onDeletePost({payload}: {type: typeof animeActions.delete; payload: Anime}): SagaIterator {
   yield call(deletePost, payload);
}

// Watcher Saga
export function* postsWatcherSaga(): SagaIterator {
   yield takeEvery(animeActions.search.type, onSearchPost);
   yield takeEvery(animeActions.update.type, onUpdatePost);
   yield takeEvery(animeActions.delete.type, onDeletePost);
   yield takeEvery(animeActions.create.type, onCreatePost);
}

export default postsWatcherSaga;
