import React from 'react'
import Tilapia from '../assets/images/tilapia.png'
import Jollof from '../assets/images/jollof-delight.png'
import Fried from '../assets/images/fried.png'
import Egusi from '../assets/images/egusi.png'



const ChefsSpeacials = () => {

  const ChefsSpecialsMenu = [
    {
      id: 1,
      title: "Spicy Tilapia Pepper Soup",
      text: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
      image: Tilapia,
      price: "₦3,500",
    },
    {
      id: 2,
      title: "Jollof Rice & Fried Chicken",
      text: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      image: Jollof,
      price: "₦3,500",
    },
    {
      id: 3,
      title: "Jollof Rice & Fried Chicken",
      text: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      image: Jollof,
      price: "₦3,500",
    },
    {
      id: 4,
      title: "Jollof Rice & Smoked Chicken",
      text: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      image: Jollof,
      price: "₦3,500",
    },
    {
      id: 5,
      title: "Jollof Rice & Fried Chicken",
      text: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      image: Fried,
      price: "₦3,500",
    },
    {
      id: 6,
      title: "Egusi Soup & Pounded Yam",
      text: "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
      image: Egusi,
      price: "₦3,500",
    }    
  ]

  const ChefsSpecialsData =ChefsSpecialsMenu.map((menu) => (
    <div className='w-97.5 rounded-md bg-[#FFFFFF] mb-6'key={menu.id}>
      <img src={menu.image} alt={menu.title} className='w-96.5 h-55.5 rounded-md ' />
      <h3 className='flex justify-start py-5 px-2 text-[20px] font-bold text-[#1F2937]'>{menu.title}</h3>
      <p className='flex justify-start  px-2  font-medium text-[#1F2937]'>{menu.text}</p>
      <div className='flex  mx-auto justify-between items-center px-4 py-5'>
        <p className='text-[#FF7A18]'>{menu.price}</p>
        <button className='bg-[#FF7A18] rounded-md py-3 px-6 text-[#FFFFFF]'>Add to cart</button>
      </div>
    </div>
))



  return (
    <section className='bg-[#F3F4F6]'>
     <div className='container mx-auto '>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold text-[#1F2937] py-10'>Chef's Specials</h1>
        <div className='lg:grid lg:grid-cols-3 lg:gap-25 md:grid-cols-1'>
          {ChefsSpecialsData}
        </div>
      </div>
     </div>
    </section>
  )
}

export default ChefsSpeacials

