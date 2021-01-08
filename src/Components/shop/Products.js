import React, {useState} from 'react'
import Product from './Product';
import {MyContext} from './App';
import {Link} from 'react-router-dom';

import s from './Products.module.css'

import Pagination from './Pagination';
// import OurProducts from './data'


const Products =(props)=> {
  const [posts, setPosts] = useState([]);
 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
console.log("posts",posts)
    return(    
        <div> 
        <div className={s.flex}>
            <MyContext.Consumer>            
            {value => setPosts(value)}
            </MyContext.Consumer>                

            {currentPosts.map((elem) =>{ 
                
                return(
                    <Link to ={`/info/${elem.id}`} >               
                    <Product key = {elem.id} product={elem}/>
                    </Link>
                    )
                })}
                </div>    
                <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
                </div>      
    )
}
export default Products;