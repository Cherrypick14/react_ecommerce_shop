import React from 'react'
import "../../styles/card.scss"
import {Link} from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link to ={`product/${item.id}`}>
    <div className='card'>
         <div className="image">
            <img src={item.img} alt="" className='mainImg' />
            <img src={item.img} alt="" className='secondImg'/>
         </div>
         
         <h2>{item.title}</h2>

       <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
       </div>

    </div>
    </Link>
  )
}

export default Card