import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import '../../styles/navbar.scss'
import Cart from '../Cart/cart';
import {useSelector} from "react-redux";


const Navbar = () => {
   const[isOpen, setIsOpen] = useState(false);


 const handleToggle = () => {
    setIsOpen(!isOpen);
  };
   const products = useSelector(state =>state.cart.products);

  return (

    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/KIDDO_STOR.png" alt="" />
            <Link className ="link" to="/" style={{fontWeight:600}}>KIDDOSTORE</Link>
          </div>
          
          <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="icons">
            <SearchIcon style={{color:"black"}}/>
            <PersonOutlineIcon style={{color:"black"}} />
            <FavoriteBorderOutlinedIcon style={{color:"black"}}/>
            <div className="cartIcon" onClick={()=>{handleToggle()}}>
              <ShoppingCartOutlinedIcon style={{color:"black"}}/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Cart/>}
    </div> 
  
  );
  };
         
export default Navbar;