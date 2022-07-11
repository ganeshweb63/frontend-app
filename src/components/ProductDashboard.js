import React,{useContext} from "react";
import { Context } from './createContext';
import {Link} from 'react-router-dom';
import './productDashboard.css';

const ProductDashboard =()=>{
    const {products}=useContext(Context);
    

    return(
        <div>
            <h1>Product List</h1>
             {products.map((product)=>{
                return <section className='dashboard-body' key={product._id}>
                   <Link className='link' to={`/home/${product._id}`}> <div className='product-box'>
                        <img className='product-img' src={product.image} alt="product imgage"></img>
                        <h4 className='product-name'>{product.name}</h4>
                        <p className='product-price'>&#x20B9; {product.price}</p>
                    </div></Link>
                </section>
            })}
        </div>
    )
}

export default ProductDashboard;