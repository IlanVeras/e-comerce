import React from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  //estado da barra vermelha
  const [menu, setMenu] = React.useState("shop");

  //function that changes the menu and allows other menus to have the under red bar
  function handleMenu(name) {
    setMenu(name);
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr></hr> : <></>}
        </li>
        <li onClick={() => handleMenu("mens")}>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Man
          </Link>
          {menu === "mens" ? <hr></hr> : <></>}
        </li>
        <li onClick={() => handleMenu("womans")}>
          <Link style={{ textDecoration: "none" }} to="/womans">
            Woman
          </Link>
          {menu === "womans" ? <hr></hr> : <></>}
        </li>
        <li onClick={() => handleMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr></hr> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button onClick={() => handleMenu("login")}>Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" onClick={() => handleMenu("cart")} />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
