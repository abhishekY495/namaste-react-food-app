import React from "react";
import { Link } from "react-router-dom";

import appLogo from "../assets/appLogo.png";

const Navbar = () => {
  return (
    <nav id="navbar">
      <img src={appLogo} id="app-logo" />
      <div id="navbar-menus">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart <sup id="total-cart-items">0</sup></Link>
        <Link to="/login" id="login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
