import * as React from "react";
import classNames from "classnames";

import styles from "./image.module.scss";

export const FALLBACK_IMAGE = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515924.png";

interface IImage extends React.ImgHTMLAttributes<HTMLImageElement> {
   src: string;
   alt: string;
   fallbackSrc?: string | null;
   className?: string;
   [key: string]: any;
}

const CustomImage = ({src, alt = "", fallbackSrc = null, className, ...props}: IImage) => {
   const ref = React.useRef<HTMLImageElement | null>(null);

   const _onError = () => {
      if (ref && ref.current) {
         ref.current.onerror = null;
         ref.current.src = fallbackSrc || FALLBACK_IMAGE;
      }
   };

   return <img ref={ref} alt={alt} src={src} onError={_onError} className={classNames(styles.image, className)} {...props} />;
};

export {CustomImage as Image};
