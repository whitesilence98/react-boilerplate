import * as React from "react";

import styles from "./public.module.scss";

const PublicLayout = ({children}: {children: React.ReactNode}) => {
   return <div className={styles["root"]}>{children}</div>;
};

export {PublicLayout};
