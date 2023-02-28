import React from 'react'
import "../../styles/featuredproducts.scss"
import Card from '../Card/card'

const Featuredproducts = ({type}) => {

  const data  = [
   {
    id:1,
    img:"./img/alexi-romano.jpg",
    img2:"./img/mukuko-studio.jpg",
    title:'Long Sleeve Graphic Tee',
    isNew:true,
    oldPrice:19,
    price:12,
   },
   {
    id:2,
    img:"./img/atikh-bana.jpg",
    title:'Glovo',
    isNew:true,
    oldPrice:19,
    price:12,
   },
   {
    id:3,
    img:"./img/dom-hill.jpg",
    title:'Go Pato',
    isNew:true,
    oldPrice:19,
    price:12,
   },
   {
    id:4,
    img:"./img/katsiaryna.jpg",
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