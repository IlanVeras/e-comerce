import React from 'react'
import './Navbar.css'

import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
const Navbar = () => {
    //estado da barra vermelha
    const [menu,setMenu] = React.useState('shop')

    //function that changes the menu and allows other menus to have the under red bar
    function handleMenu(name){
        setMenu(name)
    }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => handleMenu('shop')}>Shop {menu === 'shop' ? <hr></hr> : <></>}</li>
        <li onClick={() => handleMenu('mens')}>Man {menu === 'mens' ? <hr></hr> : <></>}</li>
        <li onClick={() => handleMenu('womans')}>Woman {menu === 'womans' ? <hr></hr> : <></>}</li>
        <li onClick={() => handleMenu('kids')}>Kids {menu === 'kids' ? <hr></hr> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
