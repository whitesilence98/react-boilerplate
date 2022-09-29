import React from "react";

interface IItems {
   items: any;
}

const Items = ({items}: IItems) => {
   return (
      <div id="event-table">
         {items.map((i: any, index: any) => (
            <div key={index.toString()}>1</div>
         ))}
      </div>
   );
};

export default Items;
