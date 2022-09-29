import {configureStore, combineReducers, Action} from "@reduxjs/toolkit";
import {ThunkAction} from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";

import counterReducer from "./counters/counters.slice";
import postReducer from "./posts/posts.slice";
import animeReducer from "./anime/anime.slice";
import settingReducer from "./app/app.slice";

import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
   counter: counterReducer,
   posts: postReducer,
   animes: animeReducer,
   setting: settingReducer,
});

const persistConfig = {
   key: "root",
   version: 1,
   // whitelist: [appReducer],
   storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

//Run saga side effect
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
//
export type Thunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
