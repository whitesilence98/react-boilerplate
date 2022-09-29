export const serializeQueryString = (obj: {[key: string]: any}): string => {
   var str = [];
   for (var p in obj)
      if (obj.hasOwnProperty(p)) {
         str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
   return str.join("&");
};

export const delay = (func: any, delay: number = 1000): void => {
   setTimeout(func, delay);
};
