import React from "react";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  
    <div
      className="image w-96 h-96 m-3
       flex flex-col align-end justify-end hover:opacity-40 hover:cursor-pointer"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `center`,
        backgroundSize: 'cover'
      }}
    >
      <div className="collection-footer bg-white flex justify-between p-2">
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  
);

export default CollectionItem;
