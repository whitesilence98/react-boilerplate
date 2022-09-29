import React from 'react';

import './loading-module.scss';

interface ILoading {
   overlay?: boolean;
}

const Loading = ({overlay = false}: ILoading) => {
   return (
      <div className={`loading-wrapper ${overlay && 'loading-wrapper--overlay'}`}>
         <div className="boxes">
            <div className="box">
               <div />
               <div />
               <div />
               <div />
            </div>
            <div className="box">
               <div />
               <div />
               <div />
               <div />
            </div>
            <div className="box">
               <div />
               <div />
               <div />
               <div />
            </div>
            <div className="box">
               <div />
               <div />
               <div />
               <div />
            </div>
         </div>
         <a
            className="dribbble"
            href="https://dribbble.com/shots/5533600-Loading-boxes"
            target="_blank"
         >
            <img
               src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
               alt=""
            />
         </a>
      </div>
   );
};

export default Loading;
