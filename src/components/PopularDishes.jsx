import React from 'react'
import JollofDelighties from '../assets/images/jollof-delight.png'
import Swallow from '../assets/images/swallow.png'
import Grills from '../assets/images/grills.png'
import SweatTreats from '../assets/images/sweet.png'



const PopularDishies = () => {

  const popularDishiesMenu = [
    {
      id: 1,
      title: "Jollof Delights",
      image: JollofDelighties,
    },
    {
      id: 2,
      title: "Swallow & Soups",
      image: Swallow,
    },
    {
      id: 3,
      title: "Grills & BBQ",
      image: Grills,    
    },
    {
      id: 4,
      title: "Sweet Treats",
      image: SweatTreats,    
    },
    {
      id: 5,
      title: "Jollof Delights",
      image: Swallow,    
    },
    {
      id: 6,
      title: "Jollof Delights",
      image: Grills,    
    }
  ]

  const popularDishesData = popularDishiesMenu.map((menu) => (
    <div className='w-97.5 rounded-md bg-[#FFFFFF] mb-6' key={menu.id}>
      <img src={menu.image} alt={menu.title} className='w-96.5 h-55.5 rounded-md ' />
      <h3 className='flex justify-center py-10 text-[20px] font-bold text-[#1F2937]'>{menu.title}</h3>
    </div>
))



  return (
    <section className='bg-[#F3F4F6]'>
     <div className='container mx-auto '>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold text-[#1F2937] py-10'>Popular Categories</h1>
        <div className='lg:grid lg:grid-cols-3 lg:gap-25 md:grid-cols-1'>
          {popularDishesData}
        </div>
      </div>

     </div>
    </section>
  )
}

export default PopularDishies
