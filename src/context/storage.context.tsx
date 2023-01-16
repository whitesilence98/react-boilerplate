import {useEffect} from "react";

const EVENT_NAME = "storage";

const listener = ({key, newValue}: StorageEvent) => {
   console.log("🐳 Win -> {key, newValue}", {key, newValue});
};

const storageListener = () => {
   useEffect(() => {
      window.addEventListener(EVENT_NAME, listener);
      return () => {
         window.removeEventListener(EVENT_NAME, listener);
      };
   }, []);
   return;
};

export default {
   init: storageListener,
};
