import {useEffect} from "react";

export const setItem = <T extends string>(key: string, value: T): void => localStorage.setItem(key, value);

export const getItem = (key: string) => localStorage.getItem(key);

export const removeItem = (key: string): void => localStorage.removeItem(key);

export const clearItems = (): void => localStorage.clear();

const HELLO = "Hello";
const EVENT_NAME = "storage";

const listener = ({key, newValue: payload}: StorageEvent) => {
   if (key === HELLO) {
      console.log("🐳 Win -> payload", payload);
   }
};

export default {
   init: () =>
      useEffect(() => {
         window.addEventListener(EVENT_NAME, listener);
         return () => {
            window.removeEventListener(EVENT_NAME, listener);
         };
      }, []),
};
