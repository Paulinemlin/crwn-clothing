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
  <div className="header relative  flex p-2 bg-white items-center justify-between">
    <Link to="/">
      <Logo />
    </Link>
    <div className="options-container flex w-2/3 justify-end">
      <Link className="p-2 hover:text-green-500" to="/shop">
        Shop
      </Link>
      <Link className="p-2 hover:text-green-500" to="/shop">
        Contact
      </Link>
      {currentUser ? (
        <div
          className="p-2 hover:text-green-500 cursor-pointer"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </div>
      ) : (
        <Link className="p-2 hover:text-green-500" to="/signin">
          Sign in
        </Link>
      )}
      <CartIcon />
    </div>
    {
      hidden ? null : 
      <CartDropDown />
    }
  </div>
);

const mapStateToProps =  createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
