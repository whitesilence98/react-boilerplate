import React from 'react';

import {Image} from '@components/image';

import './loader-module.scss';

const Loader = () => {
   return (
      <div className="loader-wrapper">
         <div className="loader">
            <div className="box box0">
               <div />
            </div>
            <div className="box box1">
               <div />
            </div>
            <div className="box box2">
               <div />
            </div>
            <div className="box box3">
               <div />
            </div>
            <div className="box box4">
               <div />
            </div>
            <div className="box box5">
               <div />
            </div>
            <div className="box box6">
               <div />
            </div>
            <div className="box box7">
               <div />
            </div>
            <div className="ground">
               <div />
            </div>
         </div>
         <small>Please wait</small>
         <a
            className="dribbble"
            href="https://dribbble.com/shots/7227469-3D-Boxes-Loader"
            target="_blank"
         >
            <Image
               src="https://developer.sas.com/github-resources/_jcr_content/par/styledcontainer_480618029/par/image.img.png/1558449533927.png"
               alt=""
            />
         </a>
      </div>
   );
};

export {Loader};
