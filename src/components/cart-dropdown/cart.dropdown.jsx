import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown absolute bg-white top-14 right-0">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// })

const mapStateToProps = ({ cart: {cartItems} }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
