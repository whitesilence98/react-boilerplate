import React from "react";
import {Provider} from "react-redux";

import store from "@my-store";
import Routes from "@router";

import ThemeProvider from "@context/theme.context";
// import storageListener from "@context/storage.context";

import fontAwesome from "@utils/font-awesome";
import storageListener from "@utils/localStorage.utils";

fontAwesome.init();

export default function App() {
   storageListener.init();
   return (
      <Provider store={store}>
         <ThemeProvider>
            <Routes />
         </ThemeProvider>
      </Provider>
   );
}
