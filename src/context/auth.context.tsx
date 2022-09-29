import * as React from "react";

export const AuthProvider: React.FC = ({children}) => {
   const [auth, setAuth] = React.useState({
      userInfo: null,
      userRole: null,
   });
   return <AuthContext.Provider value={{auth}}>{children}</AuthContext.Provider>;
};

export const AuthContext = React.createContext({
   auth: {},
});

export const useAuthContext = () => React.useContext(AuthContext);
