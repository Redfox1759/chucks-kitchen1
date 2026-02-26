import React from 'react'
import Hero from "../components/Hero"
import PopularDishes from "../components/PopularDishes"
import ChefsSpecials from "../components/ChefsSpecials"
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularDishes />
      <ChefsSpecials />
      <Banner />
    </div>
  )
}

export default Home
