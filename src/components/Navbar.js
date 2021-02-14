import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar_text">
            <div className="logo">
                <img src="https://simg.nicepng.com/png/small/266-2661231_dn-pizza-2-pizza-alfresco-size-l.png" alt="logo"/>
            </div>
            <ul className="navbar_ui">
                <li> 
                    <a href="">Home</a>
                </li>
                <li> <a href="">Menu</a>
                </li>
                <li>
                    <a href="">Shop</a>
                </li>
                <li>
                    <a href="">News</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>



            </ul>
            
        </div>
        </nav>
    )
}

export default Navbar
