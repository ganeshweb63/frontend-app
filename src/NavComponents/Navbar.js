import React,{useContext, useState} from "react";
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom';
import Cart from "../Cart/Cart";
import ProductDashboard from "../components/ProductDashboard";
import DetailProductPage from "../DetailProductPage/DetailProductPage";
import './navbar.css';
import Register from "./Register";
import { Context } from "../components/createContext";

const Navbar=()=>{
    const [active,setActive]=useState(false);

    const activeToggle=()=>{
        if(active === true){
            setActive(false);
        }
        else{
            setActive(true);
        }
    }

    // Cart data ...

    const {cartData}=useContext(Context);

    return(
        <div>
            <BrowserRouter>
            <nav className='nav'>
                <ul className='menu'>
                    <li className='logo'><Link className='a' to="/">Shop Products</Link></li>
                    {/* <li className='item'><a href="#">Home</a></li> */}
                    <li className={active ? "item active" : "item"}><Link className='a' to="/"> <i class="fa-solid fa-house"></i>&nbsp;Home</Link></li>
                    <li className={active ? "item active" : "item"}><Link className='a' to="/contact"><i class="fa-solid fa-phone"></i>&nbsp; Contact</Link></li>
                    <li className={active ? "item active" : "item"}><Link className='a' to="/about"><i class="fa-solid fa-address-card"></i> &nbsp;About</Link></li>
                    <li className={active ? "item active" : "item"}><Link className='a' to="/cart">Cart <i class="fa-solid fa-cart-shopping"></i> <span className="cart-length">{cartData.length}</span></Link></li>
                    <li className={active ? "item button active" : "item button"}><Link className='a' to="/login">Login</Link></li>
                    <li className={active ? "item button secondary active" : "item button secondary"}><Link className='a' to="/register">Sign  In</Link></li>
                    <li onClick={activeToggle} className='toggle'><span className='bars'></span></li>
                </ul>

            </nav>


                <Routes>
                    {/* <Route path="/login" exact element={<Login/>}></Route> */}
                    <Route path="/register" exact element={<Register/>}></Route>
                    <Route path='/' exact element={<ProductDashboard/>}></Route>
                    <Route path='/home/:_id' exact element={<DetailProductPage/>}></Route>
                    <Route path="/cart" exact element={<Cart/>}></Route>
                </Routes>
            
            </BrowserRouter>
        </div>
    )
}

export default Navbar;