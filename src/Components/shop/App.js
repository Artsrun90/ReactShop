import React from 'react';
import OurProducts from './data'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Products from './Products';
import ProductInfo from './ProductInfo';
import Home from './home';
import Nav from "./nav";


export const MyContext = React.createContext(OurProducts)



function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Switch>       
         <Route path="/" exact component={Home}/>
         <Route path="/products" component={Products}/> 
         <Route path="/info/:id" component={ProductInfo}/>    
    </Switch>
        </BrowserRouter>
  );
}
export default App;