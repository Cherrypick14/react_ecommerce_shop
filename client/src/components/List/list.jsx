import React from 'react'
import "../../styles/list.scss"
import Card from '../Card/card'
import useFetch  from "../../hooks/useFetch";

const List = ({catId,maxPrice,sort,subCat}) => {

const subCategoryFilters = subCat.map(item => `[filters][sub_categories][id][$eq]=${item}`).join('&');

const url = `/products?populate=*&[filters][categories][id]=${catId}&${subCategoryFilters}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;

const { data, loading, error } = useFetch(url);
  
  return (
    <div className='list'>
        {error?"something's up"
         :loading ? "loading":data.map((item)=> <Card item={item} key={item.id}/>)}
    </div>
  )
}

export default List