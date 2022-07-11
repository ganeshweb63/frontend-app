import React, { useContext } from "react";
import { Context } from "../components/createContext";
import './cart.css';

const Cart =()=>{
    const {cartData , removeCartItem}=useContext(Context);
    console.log("cartData- cart",cartData);

    return(
        <div>
            <h1>Cart Products</h1>
            {cartData.map((item)=>{
                return <div className="cart-body">
                    <div className="cart-box">
                        <img className='cart-img' src={item.image} alt="product imgage"></img>
                        <h4 className='cart-name'>{item.name}</h4>
                        <p className='cart-price'>{item.price}</p>
                        {/* <button className='cart-item-remove'>Remove from Cart</button> */}
                        <button onClick={()=>removeCartItem(item._id)} className='cart-item-remove'> <i style={{color:"white"}} class="fa-solid fa-cart-shopping"></i> Remove from Cart</button>
                        <button className='cart-item-buy'><i style={{color:"black"}} class="fa-solid fa-bag-shopping"></i> Buy</button>
                    </div>
                </div>

            })}

           
        </div>
    )
}

export default Cart;