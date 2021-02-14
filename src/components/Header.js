import React from 'react'
import Navbar from './Navbar';
//import Navbar from "./Navbar"

const Header = () => {
    return  <div className="banner">
        <Navbar />
    <div className="banner-content">
        <div className="container">
            <div className="banner_text">
            <h3 className="header__pizza">Pizza Delivery</h3>
            <h1>KULDEEP PIZZA SHOP</h1>
            <p>Pizza cravings are most common to all people most especially those who treat it as a comfort food </p>
       <div className="banner_btn">
           <a href="" className="btn btn-smart">DELEVERY NOW</a>
       </div>
            </div>
        </div>
        </div>
    </div>
    
}

export default Header;
