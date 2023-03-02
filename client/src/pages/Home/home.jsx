import React from 'react'
import Categories from '../../components/Categories/categories'
import Featuredproducts from '../../components/featuredproducts/featuredproducts'
import Slider from '../../components/Slider/slider'
import "../../styles/home.scss"


const Home = () => {
  return (
    <div className='home'>
       <Slider />
       <Featuredproducts  type="featured"/>
       <Categories />
       <Featuredproducts  type="trending"/>
    </div>
  )
}

export default Home;