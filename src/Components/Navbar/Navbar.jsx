import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
function Navbar() {
  const [menu,setMenu] = useState("shop");
  const navgate = useNavigate();
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo" onClick={()=>navgate('/')}>
          <img src={logo} alt="" />
          <p>SHOPPING</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop");navgate('/')}} >Shop {menu === 'shop'?<hr/>:null}</li>
        <li onClick={()=>{setMenu("men");navgate('/men')}}>Men{menu === 'men'?<hr/>:null}</li>
        <li onClick={()=>{setMenu("women");navgate('/women')}}>Women{menu === 'women'?<hr/>:null}</li>
        <li onClick={()=>{setMenu("kids");navgate('/kids')}}>Kids{menu === 'kids'?<hr/>:null}</li>
      </ul>
      <div className="nav-login-cart">
        <button onClick={()=>{navgate('/login')}}>Login</button>
        <img src={cart_icon} alt="" onClick={()=>{navgate('/cart')}}/>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar