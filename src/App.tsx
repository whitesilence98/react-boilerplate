import React from "react";
import {Provider} from "react-redux";

import store from "@my-store";
import Routes from "@router";

import ThemeProvider from "@context/theme.context";

import fontAwesome from "@utils/font-awesome";

fontAwesome.init();

export default function App() {
   return (
      <Provider store={store}>
         <ThemeProvider>
            <Routes />
         </ThemeProvider>
      </Provider>
   );
}
