import {useNavigate} from "react-router-dom";

import {useTheme} from "@context/theme.context";

import {useAppDispatch} from "@my-store/hooks";
import {appActions} from "@my-store/app";

import {KEYS, ROUTERS} from "@constants";

import {removeItem} from "@utils/localStorage.utils";

const useDashboardHeaderHook = () => {
   const navigate = useNavigate();
   const {handleToggle} = useTheme();
   const dispatch = useAppDispatch();

   const handleChangeTheme = (): void => {
      handleToggle && handleToggle();
   };

   const logoutCallback = () => {
      navigate(ROUTERS.Login);
      removeItem(KEYS.TOKEN);
   };

   const handleLogout = (): void => {
      dispatch(appActions.signOut({callback: logoutCallback}));
   };

   return {handleChangeTheme, handleLogout};
};

export default useDashboardHeaderHook;
