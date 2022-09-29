import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import _get from "lodash/get";

import {RootState} from "@my-store/store";

import {setItem} from "@utils/localStorage.utils";
import {KEYS} from "@constants";

export interface IAppState {
   user: any;
   token: string;
   errors: any;
   success: any;
}

const initialState: IAppState = {
   user: {},
   token: "",
   errors: null,
   success: false,
};

// slice
export const appSlice = createSlice({
   name: "setting",
   initialState,
   reducers: {
      fetchSucceeded(state, {payload: {data, errors, success}}: PayloadAction<any>) {
         state.user = _get(data, "user", {});
      },
      signIn(state, {payload}) {},
      signOut(state, {payload: {callback}}) {
         state.user = initialState.user;
         callback();
      },
      saveUserData(state, {payload: {data}}) {
         state.user = _get(data, "user", {});
         if (_get(data, "token", "")) {
            state.token = data.token;
            setItem(KEYS.TOKEN, data.token);
         }
      },
   },
});

//Actions
export const appActions = {
   fetchSucceeded: appSlice.actions.fetchSucceeded,
   signIn: appSlice.actions.signIn,
   signOut: appSlice.actions.signOut,
   saveUserData: appSlice.actions.saveUserData,
};

// Selectors
export const selectSettingUserData = (state: RootState) => state.setting.user;

// Reducer
export default appSlice.reducer;

// const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
//    const {name, value} = e.target;
//    setStatus(prevState => ({...prevState, [name]: value}));
// };
