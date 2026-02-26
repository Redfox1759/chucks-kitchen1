import React from 'react'

const PaymentOption = () => {
  return (
    <section className='bg-[#F3F4F6] font-inter  '>
        <div className='container mx-auto flex flex-col bg-white border border-[#BDBDBD] rounded-lg p-6 mt-10 mb-10 w-1/2 '>

            <h2 className='text-3xl font-bold border-b border-[#BDBDBD] pb-4  mb-4'>
                Payment
            </h2>
            <div>
                <h3 className='text-xl font-medium'>Pay With</h3>
                <div className='flex items-center justify-between w-1/2 mt-4'>
                    <input type="radio" name="payment" id="card" className='accent-green-400 border-0 focus:outline-none focus:ring-0' />
                    <label htmlFor="card" className='text-md font-medium'>Card</label>
                    <input type="radio" name="payment" id="mobile" className='accent-green-400 border-0' />
                    <label htmlFor="mobile" className='text-md font-medium text-[#ACACAC]'>Bank</label>
                    <input type="radio" name="payment" id="bank" className='accent-green-400 border-0'/>
                    <label htmlFor="bank" className='text-md font-medium text-[#ACACAC]'>Transfer</label>
                </div>
            </div>

            <div>
                <div className='mt-4'>
                    <label className='block text-sm font-medium mb-2'>
                    Card Number
                    </label>
                    <input type="text" placeholder='Card Number' className='w-full border border-[#BDBDBD] p-4 rounded-md'/>
                </div>

                <div className='flex items-center gap-4 mt-4'>
                        
                    <div className='w-full'>
                        <label className='block text-sm font-medium mb-2'>
                            Expiry Date
                        </label>
                        <input  type="text" placeholder='MM/YY' className='w-full border border-[#BDBDBD] p-4 rounded-md'/>
                    </div>

                    <div className='w-full'>
                        <label className='block text-sm font-medium mb-2'>
                            CVV
                        </label>
                        <input type="text" placeholder='123' className='w-full border border-[#BDBDBD] p-4 rounded-md' />
                    </div>
                </div>

                <div className='mt-4'>
                    <input type="radio" name="saveCard" id="saveCard" />
                    <label htmlFor="saveCard" className='text-sm font-medium ml-2'>Save Card Details</label>
                </div>

                <button className='mt-6 bg-[#FF7A18] text-white py-3 px-6 rounded-lg w-full'>Pay ₦9,900</button>

                <p className='text-sm text-[#ACACAC] mt-4'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
            </div>
            
        </div>
    </section>
  )
}

export default PaymentOption
