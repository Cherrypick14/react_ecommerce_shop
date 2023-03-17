import React from 'react'
import "../../styles/list.scss"
import Card from '../Card/card'
import useFetch  from "../../hooks/useFetch";

const List = ({catId,maxPrice,sort,subCat}) => {
     
  const{data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}
  ${subCat.map(

    (item) =>`&[filters][sub_categories][id][$eq]=${item}`
    
    )}&[filters][price][$lte]${maxPrice}&sort=price:${sort}`);   
  
  return (
    <div className='list'>
        {error?"something's up"
         :loading ? "loading":data.map((item)=> <Card item={item} key={item.id}/>)}
    </div>
  )
}

export default List