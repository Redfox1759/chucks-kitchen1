import React from 'react'
import BannerImg from '../assets/images/banner.png'

const Banner = () => {
    
  return (
    <div className="relative w-full min-h-200 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img
            src={BannerImg}
            alt="Food on a table"
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 py-20">
            <div className="max-w-2xl flex flex-col items-start gap-6">
                <h1 className="text-4xl md:text-5xl lg:text-5.5xl font-bold text-white leading-tight">
                    Introducing Our New Menu Additions!
                </h1>
                <h2 className="text-lg md:text-2xl text-white opacity-90">
                    Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!
                </h2>
                <button className="rounded-md bg-[#FF7A18] hover:bg-[#e66a00] transition-colors text-white py-3 px-9 font-medium">
                    Discover what’s new
                </button>
            </div>
        </div>
    </div>
  )
}


export default Banner
