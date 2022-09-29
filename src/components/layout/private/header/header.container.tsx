import React from "react";

import styles from "./header.module.scss";

import useDashboardHeaderHook from "./header.hook";

import {Button, SvgIcon} from "@components";

interface IHeaderProps {
   handleCollapse: () => void;
   collapsed: boolean;
}

const PrivateHeader = ({handleCollapse, collapsed}: IHeaderProps) => {
   const {handleLogout, handleChangeTheme} = useDashboardHeaderHook();

   const openIcon = React.useMemo(() => {
      if (collapsed) return <SvgIcon name="angles-right" />;
      return <SvgIcon name="angles-left" />;
   }, [collapsed]);

   return (
      <div className={styles["root"]}>
         <div className={styles["logo"]}>
            <Button variant="text" onClick={handleCollapse}>
               {openIcon}
            </Button>
         </div>
         <div className={styles["navigate"]}>
            <Button variant="text" onClick={handleLogout}>
               Logout
            </Button>
            <Button onClick={handleChangeTheme}>Change Theme</Button>
            {/* <Button variant="text">
               <div className={styles["user"]}>
                  <SvgIcon name="user" />
                  <p>Change Theme</p>
               </div>
            </Button> */}
         </div>
      </div>
   );
};

export default PrivateHeader;
