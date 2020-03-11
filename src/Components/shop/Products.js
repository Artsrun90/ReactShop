import React from 'react'
import Product from './Product';
import {Link} from 'react-router-dom';
import {MyContext} from "./App"

const Products =(props)=> {
    return(       
        <div>
            <MyContext.Consumer>            
            {value =>  value.map((elem) =>{ 
                return(
                    <Link to ={`/info/${elem.id}`} >               
                    <Product key = {elem.id} product={elem}/>
                    </Link>
                    )
                })}
                </MyContext.Consumer>                
                </div>        
    )
}
export default Products;