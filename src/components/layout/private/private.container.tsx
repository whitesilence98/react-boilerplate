import * as React from "react";

import styles from "./private.module.scss";

import PrivateHeader from "./header";
import SideBar from "./sidebar";

import {getItem, setItem} from "@utils/localStorage.utils";

interface IPrivateLayout {
   children: React.ReactNode;
}

const SIDEBAR_STATUS = "sidebar-open";

const PrivateLayout = ({children}: IPrivateLayout) => {
   const sidebarOpen = getItem(SIDEBAR_STATUS);

   const [state, setState] = React.useState({
      collapse: sidebarOpen === "true" ? true : false,
   });

   const handleCollapseSidebar = React.useCallback(() => {
      setItem(SIDEBAR_STATUS, state.collapse ? "false" : "true");
      setState(prev => ({...prev, collapse: !prev.collapse}));
   }, []);

   return (
      <div className={styles["root"]}>
         <SideBar collapsed={state.collapse} />
         <div className={styles["main"]}>
            <PrivateHeader collapsed={state.collapse} handleCollapse={handleCollapseSidebar} />
            <div className={styles["content"]}>{children}</div>
         </div>
      </div>
   );
};

export {PrivateLayout};

{
   /* <div className={styles["video-bg"]}>
                  <video width={320} height={240} autoPlay loop muted>
                     <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>
               </div> */
}
