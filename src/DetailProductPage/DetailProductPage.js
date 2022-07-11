import React, { useContext, useEffect, useState } from "react";
import './detaiProduct.css';
import { Context } from "../components/createContext";
import { useParams } from "react-router-dom";
import LeftSidePage from "./LeftSidePage";
import RightSidePage from "./RightSidePage";


const DetailProductPage=()=>{
    const {products}=useContext(Context);
  //  console.log("products-detail",products);  //  Array

    const [oneProduct,setOneProduct]=useState([]);   // Array

    const _id=useParams(); //Object

    useEffect(()=>{
        getProduct();
    },[])


          const getProduct=()=>{
                if(_id._id){
                    const res=products;  
                    const data=res.filter((item)=>{
                        return item._id === _id._id;
                    })
                   // console.log("data",data); // Array
                    setOneProduct(data);
        
                }
            }
            console.log("oneProduct ",oneProduct); // Array

    return(
        <div>
            {oneProduct.map((product)=>{
                return <div className='detailProduct' key={product._id}>
                    <div className='left'><LeftSidePage product={product} /> </div>
                    <div className='right'><RightSidePage product={product} /> </div>
                </div>
            })}
        </div>
    )
}

export default DetailProductPage;