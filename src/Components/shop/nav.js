import React from 'react';
import {Link} from 'react-router-dom';


const Nav=()=>{
   
        return(
            <nav>
                <ul className="myMenu">
                    <Link to="/home">
                        <li>Home</li>
                    </Link>

                    <Link to="/products">
                        <li>products</li>
                    </Link>
                    
                    
                </ul>
            </nav>
        )
    
}
export default Nav;