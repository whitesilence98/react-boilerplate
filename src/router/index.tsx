import React, {Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {ROUTERS} from "@constants";

import ProtectedRoute from "./protected.route";
// import PublicRoute from "./public.route";
import {PageLoading} from "@components/loading";

const HomePage = React.lazy(() => import("@pages/private/home"));
const AnimePage = React.lazy(() => import("@pages/private/anime"));

const NotFound = React.lazy(() => import("@pages/errors/404.container"));

const LoginPage = React.lazy(() => import("@pages/public/login"));
const SignUpPage = React.lazy(() => import("@pages/public/signup"));

const Router = () => {
   return (
      <BrowserRouter>
         <Suspense fallback={<PageLoading />}>
            <Routes>
               {/* <Route path={ROUTERS.Login} element={<PublicRoute />}> */}
               <Route path={ROUTERS.Login} element={<LoginPage />} />
               <Route path={ROUTERS.SignUp} element={<SignUpPage />} />
               {/* </Route> */}
               <Route path={ROUTERS.Home} element={<ProtectedRoute />}>
                  <Route path={ROUTERS.Home} element={<HomePage />} />
                  <Route path={ROUTERS.Anime} element={<AnimePage />} />
                  <Route path={ROUTERS.Manga} element={<AnimePage />} />
                  <Route path={ROUTERS.Aterisk} element={<NotFound />} />
               </Route>
            </Routes>
         </Suspense>
      </BrowserRouter>
   );
};

export default Router;
