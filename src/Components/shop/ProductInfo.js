import React, {useState} from 'react';
import OurProducts from './data';
import s from './Products.module.css'

const ProductInfo =(props)=>{
    const [product] = useState(OurProducts);
    
    let findedProduct = product.filter(elem => elem.id == props.match.params.id);
    let ivent = findedProduct[0];
    console.log("ivent",ivent);
    console.log("img",props.match.params.id);
    return (
        
    <div  className={s.root} >
    <h1>{ivent.company}</h1>
    <img src={'/' + ivent.img} alt=""/>
    <h3>{ivent.name}</h3>
    <h3>${ivent.price}</h3>
    <p>{ivent.info}</p>
    <h3>{ivent.total}</h3>
    <div className={s.pFooter}>
    <p>{ivent.company}</p>
    </div>
    <span className={s.binIcon}>
      <i/>
    </span>
</div>
        );
   
}

export default ProductInfo;



