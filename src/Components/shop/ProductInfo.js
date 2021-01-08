import React, {useState} from 'react';
import OurProducts from './data';
import s from './Products.module.css'

const ProductInfo =(props)=>{
    const [product] = useState(OurProducts);
    
    // const [findedProduct, setfindedProduct] = useState([])

    let findedProduct = product.filter(elem => elem.id == props.match.params.id);    
    let ivent = findedProduct[0];
    console.log("img",props.match.params.id);
    console.log("State-PRO",product)
    
  //   useEffect(()=>{
  //     console.log("PRO",product)
  //   const fetchPosts =  () => {
  //     const res =(product.filter(elem => elem.id = props.match.params.id));
  //     setfindedProduct(res)
  //   }
  //   fetchPosts();
  // }, []);
  
    // let ivent = findedProduct[0];
    
    return (
      
      <div  className={s.info} >
      {console.log("product",findedProduct[0])}
            <h1>{ivent.company}</h1>
            <div style={{marginTop: "60px"}}>
                <img style={{float: "left"}} src={'/' + ivent.img} alt=""/>
                <div style={{float: "right"}}>
                  <h3>Model: {ivent.name}</h3>
                  <h3>Price: ${ivent.price}</h3>
                  <p><b>Some info abot product:</b></p>
                  <p>{ivent.info}</p>
                  <h2>Total: {ivent.total}</h2>
                  {/* <div className={s.pFooter}>
                  <p>{ivent.company}</p>
                  </div> */}
                  <span className={s.binIcon}>
                    <i/>
                  </span>
                </div>
            </div>
      </div>
        );
   
}

export default ProductInfo;



