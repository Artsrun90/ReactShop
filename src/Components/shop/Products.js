import React, { useState } from 'react'
import Product from './Product';
// import ProductInfo from './ProductInfo';
import s from './Products.module.css'
import {Link} from 'react-router-dom';
import {MyContext} from "./App"

const Products =(props)=> {
    // const [product, setProduct]=useState([props])
   
    return(
        
        
        <div>
            <MyContext.Consumer>
                            {/* {value => <h1>{value}</h1>}                           */}
            
            {value =>  value.map((elem) =>{                
        {console.log("prod11111",elem)}
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