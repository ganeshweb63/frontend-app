import React,{useEffect, useState} from 'react';
import { Context} from './createContext';
import axios from 'axios';
import Navbar from '../NavComponents/Navbar';


function ContextProvider() {

  // Product list code....
  const [products,setProducts]=useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:8088/getdata').then(
      res=>{
        console.log(res.data);
        setProducts(res.data);
      }
    )
  },[])
 // console.log("products",products);

  // Cart add Product code...

  const [cartData,setCartData]=useState([]);

  const addCartItem=(id)=>{

    var check=cartData.every((item)=>{
      return item._id !== id;
    })

    if(check){
      let oneCartItem= products.filter((item)=>{
        return item._id ===id;
      })
     // console.log("oneCartItem",oneCartItem[0]);
      setCartData([...cartData, oneCartItem[0]]);
    }
    else{
      alert("This Product has been added to Cart Already.")
    }


  }



  console.log("cartData",cartData);

  // remove cart code....

  const removeCartItem=(id)=>{
    if(window.confirm("Do you want to delete this product?")){
      let oneCartItem=cartData.filter((item)=>{
        return item._id !== id;
      })
  
      setCartData([...oneCartItem]);  
    }
    
  }

  // Cart item decrement ....

  const decrementCartItem=(id)=>{
      cartData.forEach((item)=>{
        if(item._id === id){
          item.quantity ===1 ? item.quantity =1 : item.quantity -=1;
        }
      })
      setCartData([...cartData]);
  }

   // Cart item Increament ....

   const increamentCartItem=(id)=>{
   cartData.forEach((item)=>{
      if(item._id === id){
       return item.quantity +=1;
      }  
    })
    
     setCartData([...cartData]);  
   }


  // Cart Products all amount...

    const [totalAmount,setTotalAmount]=useState(0);
    const getTotalAmount=()=>{
      let amount=cartData.reduce((prev, item)=>{
        return prev + (item.price * item.quantity);
      },0)
      setTotalAmount(amount);
    }

    //  Updating through local storage Cart information...
        useEffect(()=>{
          const CartItemsData= JSON.parse(localStorage.getItem('CartItemsData'));
          if(CartItemsData){
            setCartData(CartItemsData);
          }
      
          },[]);


    useEffect(()=>{
      localStorage.setItem('CartItemsData',JSON.stringify(cartData));
    },[cartData]);
    


  return (
    <Context.Provider value={{products , cartData , addCartItem , removeCartItem , decrementCartItem , increamentCartItem , totalAmount , getTotalAmount}}>
      <Navbar/>
    </Context.Provider>
  );
}

export default ContextProvider;
