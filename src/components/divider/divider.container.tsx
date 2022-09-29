import React from "react";

import styles from "./divider.module.scss";

interface IDivider {
   content?: string;
}

export const Divider = ({content}: IDivider): JSX.Element => {
   return (
      <div className={styles["root"]}>
         <span className={styles["line"]} />
         {content && (
            <>
               <p className={styles["content"]}>{content}</p>
               <span className={styles["line"]} />
            </>
         )}
      </div>
   );
};
