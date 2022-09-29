import * as React from "react";

import "./button-module.scss";

import classNames from "classnames";

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
   variant?: "outlined" | "contained" | "text";
   children?: any;
   endIcon?: any;
   startIcon?: any;
   ref?: any;
   className?: string;
   loading?: boolean;
   fullWidth?: boolean;
   type?: "submit" | "reset" | "button";
}

const Button: React.FC<IButtonProps> = ({
   children,
   color,
   variant,
   disabled,
   loading,
   fullWidth,
   className,
   onClick,
   ...rest
}): JSX.Element => {
   const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      if (onClick) onClick(e);
   };

   return (
      <button
         {...rest}
         disabled={disabled || loading}
         onClick={handleClick}
         className={classNames("mb-button", `mb-button--${color}`, `mb-button--${variant}`, className, {
            "mb-button--disabled": disabled,
            "mb-button--fullWidth": fullWidth,
         })}>
         {loading ? <div className={classNames("mb-button_loading", `mb-button_loading--${variant}-${color}`)}></div> : children}
      </button>
   );
};

Button.defaultProps = {
   color: "default",
   variant: "contained",
   fullWidth: false,
   type: "button",
};

export default Button;
