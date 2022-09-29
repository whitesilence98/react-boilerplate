import React from "react";
import {useNavigate} from "react-router-dom";

import styles from "./404.module.scss";

import {Button} from "@components";

const NotFound = () => {
   const navigate = useNavigate();

   const goToHome = () => navigate("/");

   return (
      <div className={styles["root"]}>
         <div className={styles["notfound"]}>
            <div className={styles["notfound-404"]}>
               <h1>Oops!</h1>
               <h2>404 - The Page can't be found</h2>
            </div>
            <div className={styles["button-wrapper"]}>
               <Button onClick={goToHome}>Go to homepage</Button>
            </div>
         </div>
      </div>
   );
};

export default NotFound;
