import React from "react";

import appLogo from "../assets/appLogo.png";

const Navbar = () => {
  return (
    <nav id="navbar">
      <img src={appLogo} id="app-logo" />
      <div id="navbar-menus">
        <a href="/">
          <p>Home</p>
        </a>
        <p>
          Cart <sup id="total-cart-items">0</sup>
        </p>
        <button id="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
