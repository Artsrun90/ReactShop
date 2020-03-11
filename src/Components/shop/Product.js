import React from 'react';
import s from './Products.module.css'

const Product =(props)=> {
    const {id, name, company, price, info, total,img} = props.product;
    console.log(id, name, company, price, info, total, img)
    
    console.log("prod222222",props.product)
    return(

        <div  className={s.root} >
            <h1>{company}</h1>
            <img src={img}/>
            <h3>{name}</h3>
            <h3>${price}</h3>
            <p>{info}</p>
            <h3>{total}</h3>
            <div className={s.pFooter}>
            <p>{company}</p>
            </div>
            <span className={s.binIcon}>
              <i/>
            </span>
        </div>
    )
}
export default Product;