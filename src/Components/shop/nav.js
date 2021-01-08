import React from 'react';
import {Link} from 'react-router-dom';
import s from "./Nav.module.css"


const Nav=()=>{
   
        return(
            <nav className={s.nav}>
                <ul className={s.Menu}>
                    <Link style={{textDecoration: "none"}} to="/home">
                        <li>Home</li>
                    </Link>

                    <Link style={{textDecoration: "none"}} to="/products">
                        <li>Products</li>
                    </Link>
                    
                    
                </ul>
            </nav>
        )
    
}
export default Nav;