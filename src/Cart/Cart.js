import React, { useContext, useEffect, useState } from "react";
import { Context } from "../components/createContext";
import './cart.css';

const Cart =()=>{
    const {cartData , removeCartItem , decrementCartItem , increamentCartItem , totalAmount , getTotalAmount}=useContext(Context);
  //  console.log("cartData- cart",cartData);

  //  const [cartItems,setCartItems]=useState([]);

    // Updating through local storage Cart information...
    // useEffect(()=>{
    //     const CartItemsData= JSON.parse(localStorage.getItem('CartItemsData'));
    //     if(CartItemsData){
    //       setCartItems(CartItemsData);
    //     }
    
    //     },[]);
    //     console.log("cartItems",cartItems);
    useEffect(()=>{
        getTotalAmount();
    },[{cartData , removeCartItem , decrementCartItem , increamentCartItem}]);

    return(
        <div>
            {cartData.length ===0 ? 
            <h2>Nothing in Cart page...Please Add Something..</h2>
             : 
             cartData.map((item)=>{
                return <div className="cart-body">
                    <div className="cart-box">
                        <img className='cart-img' src={item.image} alt="product imgage"></img>
                        <h4 className='cart-name'>{item.name}</h4>
                        <p className='cart-price'>&#x20B9; {item.price * item.quantity}</p>
                        <div className="cart-quantity">
                            <button onClick={()=>decrementCartItem(item._id)} className="amount">-</button>
                            <span>{item.quantity}</span>
                            <button  onClick={()=>increamentCartItem(item._id)} className="amount">+</button>

                        </div>
                        {/* <button className='cart-item-remove'>Remove from Cart</button> */}
                        <button onClick={()=>removeCartItem(item._id)} className='cart-item-remove'> <i style={{color:"white"}} class="fa-solid fa-cart-shopping"></i> Remove from Cart</button>
                        <button className='cart-item-buy'><i style={{color:"black"}} class="fa-solid fa-bag-shopping"></i> Buy</button>
                    </div>
                </div>

            })}

            <div>
                <h3>Total : &#x20B9; {totalAmount} </h3>
            </div>
        </div>
    )
}

export default Cart;