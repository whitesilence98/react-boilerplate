import _isEmpty from "lodash/isEmpty";

import {selectSettingUserData} from "@my-store/app";
import {useAppSelector} from "@my-store/hooks";
import {getItem} from "./localStorage.utils";
import {KEYS} from "@constants";

export const useAuth = () => {
   // const user = useAppSelector(selectSettingUserData);
   // return !_isEmpty(user);
   const tokenExisted = getItem(KEYS.TOKEN);
   return tokenExisted;
};
