import React, { useContext } from "react";
import { Link } from "react-router-dom";

import appLogo from "../assets/appLogo.png";
import { UserData } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";

const Navbar = () => {
  const { userDetails } = useContext(UserData);
  const { cartItems } = useContext(CartContext);

  return (
    <nav id="navbar">
      <img src={appLogo} id="app-logo" />
      <div id="navbar-menus">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          Cart <sup id="total-cart-items">{cartItems.length}</sup>
        </Link>
        {userDetails?.name?.length > 0 ? (
          <Link to="/profile" className="profile-btn">
            Profile
          </Link>
        ) : (
          <Link to="/login" id="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
