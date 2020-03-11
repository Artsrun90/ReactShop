import React, {useState} from 'react';
import OurProducts from './data';
import s from './Products.module.css'

const ProductInfo =(props)=>{
    const [product, setProduct] = useState(OurProducts);
    console.log("id:",props.match.params.id)
    const foo = (element) => {
        for(let i =0; i < product.length; i++){
              if(element.id == props.match.params.id){
                  return element;
              }
        }
    }
    let ivent = product.find(foo);
    console.log("img",ivent.img)
    return (
        
    <div  className={s.root} >
    <h1>{ivent.company}</h1>
    <img src={'/'+ ivent.img}/>
    <h3>{ivent.name}</h3>
    <h3>${ivent.price}</h3>
    <p>{ivent.info}</p>
    <h3>{ivent.total}</h3>
    <div className={s.pFooter}>
    {/* <p>{company}</p> */}
    </div>
    <span className={s.binIcon}>
      <i/>
    </span>
</div>
        );
   
}

export default ProductInfo;



// import React, {  } from 'react';
// import {MyContext2} from './Cars'

// const  ProductInfo=(props)=>  {
   
       
    
//     goToHomePage=()=>{
//         this.props.history.push({
//             pathname:"/"
//         })
//     }
//     render() { 
//         let carImg = "";
//         if(this.props.match.params.name === "Audi"){
//             carImg = this.state.carInfo[0];
//         }else if(this.props.match.params.name === "Mazda"){
//             carImg = this.state.carInfo[1];
//         }else if(this.props.match.params.name === "Zapo"){
//             carImg = this.state.carInfo[2];
//         }
//         return ( 
           
//             <div style={{
//             backgroundImage:`url("${carImg}")`,
//             backgroundSize:'cover',
//             height:'100vh', 
//             textAlign:'center',
//             paddingTop:'50px'}}>
//                 <h1 style={{color:"red",margin:'0'}}>{this.props.match.params.name}</h1>
//                 <button onClick={this.goToHomePage.bind(this)}>My Cars</button>
//             </div>
//          );
//     }
// }
 
// export default ProductInfo;