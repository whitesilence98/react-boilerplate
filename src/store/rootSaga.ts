import {all, fork} from "redux-saga/effects";

import {postsWatcherSaga} from "./posts/posts.sagas";
import {appWatcherSaga} from "./app/app.sagas";

export function* rootSaga() {
   yield all([fork(postsWatcherSaga)]);
   yield all([fork(appWatcherSaga)]);
}

export default rootSaga;
