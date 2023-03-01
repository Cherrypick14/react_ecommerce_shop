import React from 'react'
import "../../styles/featuredproducts.scss"
import Card from '../Card/card'

const Featuredproducts = ({type}) => {

  const data  = [
   {
    id:1,
    img:"https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=400",
    img2:"https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=400",
    title:'Long Sleeve Graphic Tee',
    isNew:true,
    oldPrice:19,
    price:12,
   },
   {
    id:2,
    img:"https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=400",
    title:'Glovo',
    isNew:true,
    oldPrice:19,
    price:12,
   },
   {
    id:3,
    img:"https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=400",
    title:'Go Pato',
    isNew:true,
    oldPrice:19,
    price:12,
   },
   {
    id:4,
    img:"https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&w=400",
    title:'We good',
    isNew:true,
    oldPrice:19,
    price:12,
   },
  ]

  return (
    <div className='featuredproducts'>
         <div className="top">
           <h1>{type}products</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quia, dicta eum ipsa non ullam consequatur harum quasi quis iusto asperiores consectetur dolorum incidunt recusandae molestias tempora esse? Repellat, temporibus.</p>

         </div>
         <div className="bottom">
              {data.map(
                item => <Card item={item} key={item.id}/>
                )}
         </div>
    </div>
  )
}

export default Featuredproducts