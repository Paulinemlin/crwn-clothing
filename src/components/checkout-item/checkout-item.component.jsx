import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div
      className="checkout-item flex items-center mb-2 
     border-b-2 justify-between p-4
    
    "
    >
      <div className="w-1/6 image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="p-2 name">{name}</span>
      <span onClick={() => removeItem(cartItem)}>&#10094;</span>
      <span className="p-2 quantity">{quantity}</span>
      <span onClick={() => addItem(cartItem)}>&#10095;</span>
      <span className="p-2 price">{price}</span>
      <span className="p-2 remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
