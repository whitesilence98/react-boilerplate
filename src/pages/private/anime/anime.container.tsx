import * as React from "react";
import _debounce from "lodash/debounce";

import styles from "./anime.module.scss";
import _get from "lodash/get";

import {useAppDispatch, useAppSelector} from "@my-store/hooks";
import {selectAnimeList, animeActions} from "@my-store/anime";

import Items from "./items";

const AnimePage = () => {
   const dispatch = useAppDispatch();
   const animeList = useAppSelector(selectAnimeList);

   React.useEffect(() => {
      // dispatch(animeActions.search({q: ""}));
   }, []);

   return (
      <div className={styles["root"]}>
         <div className={styles["filter"]}>
            <Items items={animeList} />
         </div>
      </div>
   );
};

export default AnimePage;
