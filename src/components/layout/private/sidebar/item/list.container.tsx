import * as React from "react";

import styles from "./list.module.scss";

interface ISideBarList {
   collapsed: boolean;
   items: any[];
}

const SideBarList = ({collapsed, items}: ISideBarList): JSX.Element => {
   return (
      <>
         {items.map((item, index) => (
            <div className={styles["menu"]} key={index.toString()}>
               <div className={styles["menu__header"]}>
                  <div className={styles["icon"]}>
                     <img
                        src="https://d1fdloi71mui9q.cloudfront.net/VJfD55QTQqucjqKGt5Hg_EA31CCE2-2B27-4DB6-BEC4-58FDA0018BD6.png"
                        alt="img"
                     />
                  </div>
                  {!collapsed && <span className={styles["title"]}>{item.type}</span>}
               </div>
            </div>
         ))}
      </>
   );
};

export default SideBarList;
