import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div
      className="
      image w-96 h-96 m-3
      flex flex-col align-end justify-end 
      hover:opacity-80 hover:cursor-pointer"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `center`,
        backgroundSize: "cover",
      }}
    >
      <div className="collection-footer bg-white flex justify-between p-2">
        <span>{name}</span>
        <span>{price}</span>
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to cart
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
  )(CollectionItem);
