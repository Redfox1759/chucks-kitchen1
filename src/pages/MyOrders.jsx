import React from 'react'
import Jollof from "../assets/images/jollof.png"
import Egusi from "../assets/images/egusi1.png"
import Snail from "../assets/images/snail.png"


const MyOrders = () => {

  const orders = [
    {
      id: 1,
      name: "Jollof Rice & Fried Chicken",
      price:"₦3,200",
      text: 'With plantain, extra pepper sauce',
      image: Jollof
    },
    {
      id: 2,
      name: "Jollof Rice & Fried Chicken",
      price: "₦3,200",
      text: 'With plantain, extra pepper sauce',
      image: Egusi
    },
    {
      id: 3,
      name: "Jollof Rice & Fried Chicken",
      price: "₦3,200",
      text: 'With plantain, extra pepper sauce',
      image: Snail
    },
    {
      id: 4,
      name: "Jollof Rice & Fried Chicken",
      price: "₦3,200",
      text: 'With plantain, extra pepper sauce',
      image: Jollof
    }
  ]

  const orderItems = orders.map((order) => (
    <li className='flex items-center justify-between p-4 border-3 border-[#BDBDBD] rounded-lg mb-4 w-full'>
        <img src={order.image} alt={order.name} className='w-50 h-50 object-cover rounded-lg' />
        <div>
          <h1 className='text-2xl font-bold'>{order.name}</h1>
          <p className='text-gray-600 text-xl font-medium'>{order.text}</p>
        </div>
        <div className='flex items-center gap-4'>
          <button className='w-10 h-10 rounded-md bg-[#BDBDBD] p-2'>+</button>
          <span className='mx-2 font-bold text-3xl'>1</span>
          <button className='w-10 h-10 rounded-md bg-[#BDBDBD] p-2'>-</button>
        </div>
        <div>
          <p className='text-[#FF7A18] font-bold'>{order.price}</p>
        </div>
        <div>
          <button className='w-10 h-10 rounded-md bg-[#FF7A18] p-2'>X</button>
        </div>
    </li>
  ))



  return (
    <section className='bg-[#F3F4F6] py-10'>
      <div className=' mx-auto flex flex-col  p-10'>
        <h1 className='text-2xl font-bold font-inter'>Your Cart</h1>
        <div className='mt-5'>
          <ul className='p-5'>
            {orderItems}
          </ul>
        </div>
        <div className='flex text-[#1E88E5] font-bold justify-start gap-4'>
          <p>+</p>
          <p>Add more items from Chuks Kitchen</p>
        </div>
      </div>
      
    </section>
  )
}

export default MyOrders
