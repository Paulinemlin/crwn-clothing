import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page container mx-auto max-w-5xl m-2 mt-12 bg-white">
    <div className="checkout-header flex border-b-2 justify-between items-center font-bold px-4">
      <div className="header-block p-3 ">
        <span>Produit</span>
      </div>
      <div className="header-block pl-12">
        <span>Description</span>
      </div>
      <div className="header-block pl-12">
        <span>Quantité</span>
      </div>
      <div className="header-block pl-12">
        <span>Prix</span>
      </div>
      <div className="header-block">
        <span>Supprimer</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="flex justify-end m-2">
      <div className="total px-4 ">
        <span>TOTAL: {total} €</span>
       
      </div>
      <StripeCheckoutButton className="px-12 " price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
