import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="container mx-auto flex flex-col items-center mt-4 ">
    
      <h1 className="mb-3 font-bold">{title.toUpperCase()}</h1>
      <div
        className="flex flex-row flex-wrap justify-evenly
   "
      >
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  
);

export default CollectionPreview;
