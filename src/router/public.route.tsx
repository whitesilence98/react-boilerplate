import React from "react";
import {
   Navigate,
   Outlet,
   // RouteProps
} from "react-router-dom";

import {ROUTERS} from "@constants";

import {PublicLayout} from "@components";

import {useAuth} from "@utils/auth.utils";

// interface IPublicRoute extends RouteProps {
//    isAuthenticated?: boolean | string;
// }

const PublicRoute = () => {
   const auth = useAuth();
   return !auth ? <Outlet /> : <Navigate to={{pathname: ROUTERS.Home}} />;
};

PublicRoute.defaultProps = {
   isAuthenticated: true,
};

export default PublicRoute;
