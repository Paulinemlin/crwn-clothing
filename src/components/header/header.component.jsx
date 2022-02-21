import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartDropDown from "../cart-dropdown/cart.dropdown";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => (
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
        {(currentUser) ? (
          <div
            className="p-2 hover:text-green-500 cursor-pointer"
            onClick={signOutStart}
          >
            Se déconnecter
          </div>
        ) : (
          <Link className="p-2 hover:text-green-500" to="/signin"
          onClick={signOutStart}>
            Se connecter
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
