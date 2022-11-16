import React from 'react'
import Navbar from './Navbar'

import "../font/Gopher/Gopher-Regular.ttf"

import BG from "./assets/bg_image.png"
import HeroSectionBg from "./assets/heroSectionBg.png"
import HeroSectionBgs from "./assets/Herosection.svg"

const HeroSection = () => {
    return (
        <div className='bg-[#051740] py-20'>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className='w-full mt-14'>
                <div className='flex xl:flex-row flex-col'>
                    {/* <div className='flex flex-col lg:w-2/4 lg:ml-20 w-full ml-10'> */}
                    <div className='flex flex-col xl:w-2/4 lg:w-full lg:ml-8 xl:ml-20 w-full ml-10'>
                        <div className='xl:border-b-2 text-slate-400 pb-6 lg:mx-8'>
                            <h1 className='font-[Light] xl:text-[64px] text-[50px] font-black text-[#ACE3E1] xl:leading-[88px]'>Closing Africas' Data Gap</h1>
                            <p className='font-[poppins] lg:text-3xl lg:leading-[63px] text-slate-400 text-2xl leading-[50px]'>
                                SpaceAI is an <span className='text-[#f9f9f9]'>open data platform</span> that leverages
                                advanced digital agent systems to <span className='text-[#f9f9f9]'>enable service & data  exchange </span> across value chains.
                            </p>
                        </div>
                        <div className='font-[poppins] mt-10 md:w-[95%] lg:w-[90%] w-full  lg:mx-8'>
                            <p className='font-bold xl:text-xl md:text-xl text-md leading-[29px] text-[#ACE3E1]'>
                                learn how your organization can be among the first Spacers. We coffee alot, & make great moves.
                            </p>
                        </div>

                        <div className='mt-10 flex xl:flex-row flex-col lg:mx-8'>
                            <div className='w-[265px] h-[70px]'>
                                <div className='my-auto bg-white rounded-md'>
                                    <input placeholder='Share your email' className='flex items-center justify-center border-none font-[poppins] outline-none d-block m-auto h-[70px]' />
                                </div>
                            </div>

                            <button className='rounded-[30px] md:w-[36%] lg:w-[29%] xl:w-[50%] xl:ml-10 mt-5 xl:mt-0 xl:px-12 xl:py-6 px-2 py-4 font-[Light] bg-[#31B9B5] text-white text-center leading-[25px] text-xl font-medium'>
                                claim your space
                            </button>
                        </div>
                    </div>

                    {/* Left side */}
                    <div className='xl:w-[50%] w-full lg:m-auto' style={{
                        backgroundImage: "url(" + `${BG}` + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}  >
                        <img src={HeroSectionBg} alt="Hero section image" className='mt-20' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroSection