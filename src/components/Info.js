import React from 'react'
import InfoChild from './InfoChild'
import LineImageOne from "./assets/line_image_one.png"
import LineImageThree from "./assets/line_image_three.png"
import RightArrow from "./assets/right_arrow.png"

const Info = () => {
    return (
        <div className='w-full bg-[#31B9B5] flex xl:flex-row flex-col xl:h-[200vh]'>
            <div className='w-full xl:w-3/6 flex xl:flex-col flex-row justify-between ml-0 md:ml-9 lg:ml-12 py-20'>
                <div className='w-[100%] md:ml-4 md:w-[93%] lg:w-[90%] flex flex-col justify-between xl:h-[200vh]'>
                    <div className='mb-8 '>
                        <InfoChild
                            img={LineImageOne}
                            boldText={"Enhancing value"}
                            text={"across business Runways through innovative and design led data acquisition & management tools"}
                            btn="Learn More"
                        />
                    </div>
                    <div>
                        <InfoChild
                            img={LineImageOne}
                            text={"We aggregate real time data & support service exchange to enable actors achieve goals across value and supply chains."}
                            btn="Learn More"
                        />
                    </div>
                </div>
            </div>

            <div className='w-full xl:w-3/6 flex flex-col justify-between xl:-mt-4 md:-mt-32 -mt-28  md:ml-9 lg:ml-12 py-20 ml-3'>
                <div className='flex flex-col justify-between my-auto md:ml-4 md:w-[93%]'>
                    <div className='flex '>
                        <img src={LineImageThree} alt="Line Image" className='h-[220px] md:h-[220px] lg:h-[180px] xl:h-[400px]' />
                        <div className='ml-5 md:ml-2 relative'>
                            <p className='font-[poppins] text-black/[.8] text-xl leading-[35px] xl:text-3xl font-light md:leading-[55px] xl:leading-[63px]'>
                                We facilitate a <span className='font-semibold text-black'>decentralized</span>, yet holistic agent network built on easy-to-use conversational platforms. We connect value creators across business runways to facilitate real-time access to key services & data.
                            </p>
                        </div>
                    </div>
                    <div className='xl:ml-14 ml-8 md:ml-7 md:mt-3 xl:mt-2 mb-5 '>
                        <a href="#" >
                            <button className='bg-[#051641] rounded-md font-[Light] text-white xl:w-[230px] w-[200px] h-10 xl:h-12 flex items-center justify-center'>Learn More
                                <img src={RightArrow} className="ml-5" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info