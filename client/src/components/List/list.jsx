import React from 'react'
import "../../styles/list.scss"
import Card from '../Card/card'

const List = () => {
    const data  = [
        {
         id:1,
         img:"https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=400",
         img2:"https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=400",
         title:'Long Sleeve',
         isNew:true,
         oldPrice:19,
         price:12,
        },
        {
         id:2,
         img:"https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=400",
         title:'Duke style',
         isNew:true,
         oldPrice:19,
         price:12,
        },
        {
         id:3,
         img:"https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=400",
         title:'Glasses',
         isNew:true,
         oldPrice:19,
         price:12,
        },
        {
         id:4,
         img:"https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&w=400",
         title:'hat',
         isNew:true,
         oldPrice:19,
         price:12,
        },
       ];
       
  return (
    <div className='list'>
        {data.map((item)=> <Card item={item} key={item.id}/>)}
    </div>
  )
}

export default List