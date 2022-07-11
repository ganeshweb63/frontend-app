import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../components/createContext";

const LeftSidePage=({product})=>{
    const {addCartItem}=useContext(Context);

    return(
        <div className='left-box' >
            <img className='image' src={product.image} alt="product-image"></img>
            <h2 className='name'>{product.name}</h2>
            <h3 className='price'> 	&#x20B9; {product.price}</h3>
            {/* <button onClick={()=>cartProducts(product._id)} className='add-to-cart'>Add To Cart</button> */}
            <Link to={`/cart`}><button onClick={()=>addCartItem(product._id)} className='add-to-cart'> <i style={{color:"black"}} class="fa-solid fa-cart-shopping"></i> Add To Cart</button></Link>
            <button className='buy'> <i style={{color:"white"}} class="fa-solid fa-bag-shopping"></i> Buy</button>

    </div>
    )
}

export default LeftSidePage;