import {SagaIterator} from "@redux-saga/core";
import {call, put, takeEvery} from "redux-saga/effects";
import _get from "lodash/get";

// import {Post} from "@models/post";
import {signIn} from "@services/auth.service";

import {appActions} from "./app.slice";

interface AppSagaReturn<T> {
   type: T;
   payload: any;
}

export function* onSignIn({payload: {email, password}}: AppSagaReturn<typeof appActions.signIn>): SagaIterator {
   const {success, errors, data} = yield call(signIn, {email, password});
   yield put(appActions.fetchSucceeded({data, errors, success}));
}

// Watcher Saga
export function* appWatcherSaga(): SagaIterator {
   yield takeEvery(appActions.signIn.type, onSignIn);
}
