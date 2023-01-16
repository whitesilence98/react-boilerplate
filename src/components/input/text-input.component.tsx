import React from "react";
import classNames from "classnames";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
// import {motion} from "framer-motion";
import _get from "lodash/get";

import styles from "./text-input.module.scss";

import {SvgIcon} from "@components/icon";

const variants = {
   hidden: {
      opacity: 0,
      y: 50,
      transition: {ease: [0.78, 0.14, 0.15, 0.86]},
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {ease: [0.78, 0.14, 0.15, 0.86]},
   },
};

interface ITextInputProps extends React.HTMLProps<HTMLInputElement> {
   variant?: "outlined" | "contained";
   children?: any;
   endIcon?: IconProp;
   startIcon?: IconProp;
   onClickIcon?: () => void;
   ref?: any;
   className?: string;
   error?: any;
}

const CustomTextInput = React.forwardRef(
   ({startIcon, endIcon, onClickIcon, variant = "contained", onFocus, onBlur, className, error, ...props}: ITextInputProps, ref: any) => {
      const [focused, setFocused] = React.useState(false);

      const _onFocus = (e: any) => {
         setFocused(true);
         if (onFocus) {
            onFocus(e);
         }
      };

      const handleClickIcon = () => {
         if (!endIcon || !onClickIcon) return;
         onClickIcon();
      };

      const _onBlur = (e: any) => {
         setFocused(false);
         if (onBlur) {
            onBlur(e);
         }
      };

      return (
         <div className={styles["root"]}>
            <div className={styles["input"]}>
               <input
                  ref={ref}
                  onFocus={_onFocus}
                  onBlur={_onBlur}
                  className={classNames(
                     styles["input__text"],
                     styles[`input__text--${variant}`],
                     {
                        [styles["input__text--with-icon"]]: endIcon,
                        [styles["input__text--error"]]: error,
                        [styles["input__text--focused"]]: focused,
                     },
                     className,
                  )}
                  {...props}
               />
               {endIcon && (
                  <div className={styles["input__icon"]}>
                     <SvgIcon name={endIcon} onClick={handleClickIcon} />
                     {/* <SvgIcon name="circle-exclamation" /> */}
                  </div>
               )}
            </div>
            {error && <p className={styles["error-text"]}>{`*${_get(error, "message", "invalid")}`}</p>}
         </div>
      );
   },
);

export {CustomTextInput as TextInput};
