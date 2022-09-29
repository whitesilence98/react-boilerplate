import React from "react";
import {Navigate, Outlet} from "react-router-dom";

import {ROUTERS} from "@constants";

import {PrivateLayout} from "@components";

import {useAuth} from "@utils/auth.utils";

// interface IProtectedRoute extends RouteProps {
//    isAuthenticated?: boolean | string;
// }

const ProtectedRoute = () => {
   const auth = useAuth();
   return !auth ? (
      <Navigate to={{pathname: ROUTERS.Login}} />
   ) : (
      <PrivateLayout>
         <Outlet />
      </PrivateLayout>
   );
};

ProtectedRoute.defaultProps = {
   isAuthenticated: false,
};

export default ProtectedRoute;
