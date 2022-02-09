import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {createStructuredSelector } from 'reselect'

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartDropDown from "../cart-dropdown/cart.dropdown";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";


const Header = ({ currentUser, hidden }) => (
  <div className="bg-white">
    <div className="header container mx-auto max-w-5xl relative  flex p-2 bg-white items-center justify-between">
    <Link to="/">
      <Logo />
    </Link>
    <div className="options-container flex w-2/3 justify-end">
      <Link className="p-2 hover:text-green-500" to="/shop">
        Boutique
      </Link>
      <Link className="p-2 hover:text-green-500" to="/shop">
        Contact
      </Link>
      { (currentUser) ? (
        <div
          className="p-2 hover:text-green-500 cursor-pointer"
          onClick={() => auth.signOut()}
        >
          Se déconnecter
        </div>
      ) : (
        <Link className="p-2 hover:text-green-500" to="/signin">
          Se connecter
        </Link>
      )}
      <CartIcon />
    </div>
    {
      hidden ? null : 
      <CartDropDown />
    }
  </div>
  </div>
);

const mapStateToProps =  createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
