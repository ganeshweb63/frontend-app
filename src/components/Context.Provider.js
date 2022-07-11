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
  console.log("products",products);

  // Cart Product code...

  const [cartData,setCartData]=useState([]);

  const addCartItem=(id)=>{
   let oneCartItem= products.filter((item)=>{
      return item._id ===id;
    })
    console.log("oneCartItem",oneCartItem[0]);
    setCartData([...cartData,oneCartItem[0]]);
  }

  console.log("cartData",cartData);

  // remove cart code....

  const removeCartItem=(id)=>{
    let oneCartItem=cartData.filter((item)=>{
      return item._id !== id;
    })

    setCartData(oneCartItem);

  }



  return (
    <Context.Provider value={{products , cartData , addCartItem , removeCartItem}}>
      <Navbar/>
    </Context.Provider>
  );
}

export default ContextProvider;
