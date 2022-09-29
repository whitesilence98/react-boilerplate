import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface ITextInputProps {
   name: IconProp;
   [key: string]: any;
}

const Icon = ({name, ...props}: ITextInputProps) => {
   return <FontAwesomeIcon icon={name} {...props} />;
};

export {Icon as SvgIcon};
