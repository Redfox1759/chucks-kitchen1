import React from 'react'
import HeroImg from '../assets/images/Hero.png'

const Hero = () => {

    // const backgroundStyle = {
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImg})`,
        
        
    // };

    
  return (
    // <section className='min-h-screen flex items-center '>
    //     <div>
    //         <img src={HeroImg} alt="Hero" />
    //     </div>
    //     <div className='container  mx-auto  flex flex-col items-start gap-6'>
    //         <h1 className='text-5xl font-bold text-white leading-15.25'>The Heart of Nigerian Home <br/>Cooking</h1>
    //         <h2 className='text-xl text-white mt-4'>Handcrafted with passion, delivered with care.</h2>
    //         <button className='rounded-md bg-[#FF7A18] text-[#FFFFFF] py-3 px-9'>Discover what’s new</button>     
    //     </div>
    // </section>
    <div className="relative w-full min-h-200 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img
            src={HeroImg}
            alt="Food on a table"
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 py-20">
            <div className="max-w-2xl flex flex-col items-start gap-6">
                <h1 className="text-4xl md:text-5xl lg:text-5.5xl font-bold text-white leading-tight">
                    The Heart of Nigerian Home  <br className="hidden md:block"/> Cooking
                </h1>
                <h2 className="text-lg md:text-xl text-white opacity-90">
                    Handcrafted with passion, delivered with care.
                </h2>
                <button className="rounded-md bg-[#FF7A18] hover:bg-[#e66a00] transition-colors text-white py-3 px-9 font-medium">
                    Discover what’s new
                </button>
            </div>
        </div>
    </div>
  )
}


export default Hero
