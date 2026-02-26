import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-[#3b1c05f7]'>
        <div className='container mx-auto'>
            <div className='flex items-center justify-between footerfont text-[#FFFFFF]'>
                <div className=' h-70 p-6'>
                    <h3 className='text-4xl font-bold logofont text-[#FF7A18] mb-2'>Chuck's Kitchen</h3>
                    <p className='text-2xl'>
                        Bringing the authentic <br /> flavors of Nigerian <br /> home cooking to your <br /> table, with passion <br /> and care.
                    </p>
                </div>
                <div className='h-70 p-6'>
                    <h3 className='text-2xl mb-2'>Quick Links</h3>
                    <ul className='text-xl'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">My Order</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className=' h-70 p-6'>
                    <h3 className='text-2xl mb-2'>Contact Us</h3>
                    <ul className='text-xl'>
                        <li>+234 801 234 5678</li>
                        <li>hello@chukskitchen.com</li>
                        <li>123 Taste Blvd, Lagos, Nigeriat</li>
                    </ul>
                </div>
                <div className='h-70 p-6'>
                    <ul className='text-xl'>
                        <li> <a href="#">Facebook</a> </li>
                        <li> <a href="#">Twitter</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer
