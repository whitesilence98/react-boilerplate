import * as React from "react";
import classNames from "classnames";

import styles from "./sidebar.module.scss";

import {SIDE_BAR_ITEMS} from "./sidebar.constant";

import {AppLogo} from "@components/common";
import SideBarList from "./item";

const SideBarWrapper = ({collapsed}: {collapsed: boolean}) => {
   return (
      <div
         className={classNames(styles["sidebar"], {
            [styles["sidebar--collapse"]]: collapsed,
         })}>
         <div className={styles["logo"]}>
            <div className={styles["icon"]}>
               <img src="https://d1fdloi71mui9q.cloudfront.net/VJfD55QTQqucjqKGt5Hg_EA31CCE2-2B27-4DB6-BEC4-58FDA0018BD6.png" alt="img" />
            </div>
            {!collapsed && <AppLogo size="sm" />}
         </div>
         <div className={styles["list"]}>
            <SideBarList items={SIDE_BAR_ITEMS} collapsed={collapsed} />
         </div>
      </div>
   );
};

export default SideBarWrapper;
