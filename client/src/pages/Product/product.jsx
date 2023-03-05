import React, { useState } from 'react'
import "../../styles/product.scss"

const Product = () => {

  const[selectedImg, setSelectedImg] = useState(0)

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
       <div className="right"></div>
    </div>
  )
}

export default Product;