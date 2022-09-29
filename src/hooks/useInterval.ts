import {useEffect, useRef} from 'react';

const useInterval = (callback: () => void, delay: number) => {
   const savedCallback = useRef<any>();

   // Remember the latest callback.
   useEffect(() => {
      savedCallback.current = callback;
   }, [callback]);

   // Set up the interval.
   useEffect(() => {
      if (delay === null) return () => {};
      const tick = () => savedCallback.current();
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
   }, [delay]);
};

export default useInterval;
