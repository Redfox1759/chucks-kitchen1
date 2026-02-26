import React from 'react'

const DeliveryDetails = () => {
  return (
    <section className='bg-[#F3F4F6] font-inter w-full h-screen '>
        <div className='container mx-auto flex flex-col bg-white border border-[#BDBDBD] rounded-lg p-6 mt-29 mb-29 w-1/2 '>

            <h2 className='text-xl font-bold'>
                Delivery Details
            </h2>
            <div>
                <textarea name="" id="" placeholder='Home: 123 Main Street, Victoria Island, Lagos Apt 4B, Opposite Mega Plaza' className='w-full border border-gray-300 rounded-md p-2 mt-2' rows="4"></textarea>
            </div>
            <h2 className='text-md font-bold mt-4'>
                Delivery Time
            </h2>
            <input type="text" placeholder='ASAP(30-25)' className='w-full border border-[#BDBDBD] p-4 rounded-md mt-4' />

            <h2 className='text-md font-bold mt-4 '>
                Delivery Instructions (Optional)
            </h2>
            <div>
                <textarea name="" id="" placeholder='E.g leave at the front of the door, knock twice...................' className='w-full border border-gray-300 rounded-md p-2 mt-2' rows="4"></textarea>
            </div>
            <h2 className='text-md font-bold mt-4'>
                Contact Address
            </h2>
            <input type="text" placeholder='+234 801 234 5678' className='w-full border border-[#BDBDBD] p-4 rounded-md mt-4' />
        </div>

            



    </section>
  )
}

export default DeliveryDetails
