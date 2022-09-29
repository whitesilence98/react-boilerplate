import * as React from "react";

const dotStyle = {color: "#2196f3"};
const headerStyle = {transition: "0.5s ease all"};

interface ILogo {
   size?: "sm" | "md" | "lg";
}

const Logo = ({size = "md"}: ILogo) => {
   const headerStyles = React.useMemo(() => {
      if (size === "lg") return {fontSize: "7rem"};
      if (size === "md") return {fontSize: "5rem"};
      return {fontSize: "3rem"};
   }, [size]);

   return (
      <h1 style={{...headerStyles, ...headerStyle}}>
         Sunnie<span style={dotStyle}>.</span>
      </h1>
   );
};

export {Logo as AppLogo};
