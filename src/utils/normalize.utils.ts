// import capitalize from "lodash/capitalize";
import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";
import isArray from "lodash/isArray";
import isObject from "lodash/isObject";
import isString from "lodash/isString";

export const DEFAULT_MESSAGE = "Oops, something went wrong!";

export const normalizeError = (errors: any) => {
   if (!errors) return DEFAULT_MESSAGE;
   if (errors.base) return errors.base;

   if (errors.message) return errors.message;

   if (isArray(errors)) {
      return errors[0] ? (errors[0].base ? errors[0].base : errors[0]) : DEFAULT_MESSAGE;
   }

   if (isObject(errors)) {
      const error = get(errors, "response.data.errors", {});
      if (get(error, "base", "")) return get(error, "base", "");

      const cloned: {[key: string]: any} = cloneDeep(errors);
      const messages = [];
      for (const key in errors) {
         const keyName = key.split("_").join(" ");
         const errorMessage = isArray(cloned[key]) ? cloned[key][0] : cloned[key];
         messages.push({[keyName]: errorMessage.message});
      }

      const errorMessage = Object.assign({}, ...messages);

      return errorMessage;
   }

   if (isString(errors)) return errors;

   return DEFAULT_MESSAGE;
};
