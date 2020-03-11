import React,  {useState}from 'react';
import OurProducts from './data'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import './App.css';
import Products from './Products';
import s from './Products.module.css'
import ProductInfo from './ProductInfo';
import Home from './home';
import Nav from "./nav";


export const MyContext = React.createContext(OurProducts)



function App() {
  // const [product, setProduct] = useState(OurProducts);
  return (
    <BrowserRouter>
    <Nav/>
    <Switch>
    
      
       {/* <Products product={product}/> */}
         {/* <Route path="/products" component={Products}/>  */}
         <Route path="/" exact component={Home}/>
         <Route path="/products" component={Products}/> 
         <Route path="/info/:id" component={ProductInfo}/>

    
    </Switch>
        </BrowserRouter>
  );
}
export default App;