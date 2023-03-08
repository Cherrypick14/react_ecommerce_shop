import React,{useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import '../../styles/navbar.scss'
import Cart from '../Cart/cart';

const Navbar = () => {
   const[isopen, setIsOpen] = useState(false)

  return (
    <div className='navbar'>
        <div className="wrapper">
             <div className="left">
              <div className="item">
                 <img src="/img/en.png" alt="" />
                  <KeyboardArrowDownIcon />
              </div>
                 <div className="item">
                     <span>USD</span>
                     <KeyboardArrowDownIcon />
               </div>

                 <div className="item">
                   <Link className="link"to ="/products/1">Women</Link>
                 </div>
                 <div className="item">
                   <Link className="link"to ="/products/2">Men</Link>
                 </div>
                 <div className="item">
                   <Link className="link" to ="/products/3">Children</Link>
                 </div>

             </div>

             <div className="center">
                <Link className="link"to ="/">KIDDOSTORE</Link>
             </div>

             <div className="right">

             <div className="item">
                <Link className="link"to ="/">Home</Link>
             </div>
             <div className="item">
                <Link className="link"to ="/">About</Link>
             </div>
             <div className="item">
                <Link className="link"to ="/">Contact</Link>
             </div>
             <div className="item">
                <Link className="link"to ="/">Stores</Link>
             </div>
                <div className='icons'>
                   <SearchIcon />
                   <PersonOutlineIcon />
                   <FavoriteBorderOutlinedIcon />

                   <div className='cartIcon'onClick={()=>setIsOpen(!isopen)}>
                      <ShoppingCartOutlinedIcon />
                      <span>0</span>
                   </div>

                </div>

             </div>
        </div>
         {isopen && <Cart />}
    </div>
  )
}

export default Navbar