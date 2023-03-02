import React from 'react'
import Categories from '../../components/Categories/categories'
import Contact from '../../components/Contact/contact'
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
       <Contact />
    </div>
  )
}

export default Home;