import React from 'react'
import Featuredproducts from '../../components/featuredproducts/featuredproducts'
import Slider from '../../components/Slider/slider'
import "../../styles/home.scss"


const Home = () => {
  return (
    <div className='home'>
       <Slider />
       <Featuredproducts  type="featured"/>
       <Featuredproducts  type="trending"/>
    </div>
  )
}

export default Home;