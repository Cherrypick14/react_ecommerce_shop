import React, { useState } from 'react';
import "../../styles/product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';


const Product = () => {

  const[selectedImg, setSelectedImg] = useState(0);

  const[quantity, setQuantity] = useState(1);

  const images =[
     "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400",
     "https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=400"
  ]
  return (
    <div className='product'>
       <div className="left">
          <div className="images">
              <img src={images[0]} alt="" onClick={e => setSelectedImg(0)}/>
              <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />

          </div>
          <div className="mainImg">
             <img src={images[selectedImg]} alt="" />

          </div>
       </div>
       <div className="right">
          <h1>Hat</h1>
          <span className='price'>$18.55</span>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia similique asperiores a odio eveniet, adipisci quos rerum magni nihil sequi. At sed excepturi nulla impedit repellat autem. Facilis, soluta consequuntur.</p>
          <div className="quantity">
             <button onClick={()=>setQuantity((prev)=> (prev === 1 ? 1 : prev- 1))}>-</button>

                 {quantity}

             <button onClick={()=>setQuantity((prev)=>prev + 1)}>+</button>

          </div>

           <button className="add">
            
            <AddShoppingCartIcon /> ADD TO CART
      
           </button>
     <div className="links">
       <div className="item">
          <FavoriteBorderIcon /> ADD TO WISHLIST
       </div>
       <div className="item">
           <BalanceIcon /> COMPARE
       </div>
     </div>

     <div className="info">
       <span>Vendor: Calvin</span>
       <span>Product Type: Poll Neck</span>
       <span>Tag: Men, women, p-neck </span>

     </div>

     <div className="details">
        <span>Description</span>

        <hr/>

        <span>Additional Info</span>

        <hr/>

        <span>FAQs</span>


     </div>


       </div>
    </div>
  )
}

export default Product;