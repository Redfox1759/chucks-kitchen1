import React from 'react'

const OrderSummary = () => {
  return (
    <section className='bg-[#F3F4F6] font-inter'>
        <div className='container mx-auto flex flex-col bg-white border border-gray-300 rounded-lg p-6 mt-10 mb-10 w-1/2'>
            <h1 className='font-inter text-bold text-2xl border-b border-[#BDBDBD]'>Order Summary</h1>
            <div className='mt-6  border-b border-[#BDBDBD]'>
                <h2 className='text-xl'>
                    Add a Promo Code
                </h2>
                <div className='flex justify-between mt-4'>
                    <input type="text"placeholder='Enter Code here' className='border border-gray-300 rounded-md p-2 w-150'/>
                    <button className='bg-[#FF7A18] text-white py-2 px-4 rounded-md ml-2 w-60'>Apply</button>
                </div>
                <div className='flex justify-between mt-4'>
                    <h2 className='font-inter text-lg '>Subtotal</h2>
                    <p className='font-inter text-lg '>₦9,200</p>
                </div>
                <div className='flex justify-between mt-4'>
                    <h2 className='font-inter text-lg '>Delivery Fee</h2>
                    <p className='font-inter text-lg '>₦500</p>
                </div>
                <div className='flex justify-between mt-4'>
                    <h2 className='font-inter text-lg '>Service Fee</h2>
                    <p className='font-inter text-lg '>₦200</p>
                </div>
                <div className='flex justify-between mt-4'>
                    <h2 className='font-inter text-lg '>Tax</h2>
                    <p className='font-inter text-lg '>₦0</p>
                </div>
            </div>
                    
            <div className='flex justify-between mt-8'>
                <h2 className='font-inter font-bold text-2xl'>Total</h2>
                <p className='font-inter text-2xl font-bold'>₦9,200</p>
            </div>

                    
            <div className='flex mt-4'>
                <button className='flex-1 bg-[#FF7A18] text-white py-2 rounded-l-md'>
                    Delivery
                </button>
                <button className='flex-1 bg-[#BDBDBD] text-white py-2 rounded-r-md'>
                    Pick Up
                </button>
            </div>

            <div className='mt-6'>
                <h1 className='text-xl'>Special Instructions for Restaurant</h1>
                <textarea placeholder='E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty' className='w-full border border-gray-300 rounded-md p-2 mt-2' rows="4"></textarea>
            </div>
            
            <button className='mt-6 bg-[#FF7A18] text-white py-3 px-6 rounded-md w-full'>Proceed to Checkout</button>
        </div>
    </section>
  )
}

export default OrderSummary
