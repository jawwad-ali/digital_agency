import React from 'react'
import InfoChild from './InfoChild'
import LineImageOne from "./assets/line_image_one.png"
import LineImageThree from "./assets/line_image_three.png"
import RightArrow from "./assets/right_arrow.png"

const ThirdParaBoldText = <span className="font-extrabold text-black">decentralized</span>
console.log(ThirdParaBoldText)
const Info = () => {
    return (
        <div className='w-full bg-[#31B9B5] flex h-[200vh]'>
            <div className='w-3/6 flex flex-col justify-between ml-20 py-20'>
                <div className=' w-[100%] flex flex-col justify-between h-[200vh] '>
                    <InfoChild 
                        img={LineImageOne}
                        boldText={"Enhancing value"}
                        text={"across business Runways through innovative and design led data acquisition & management tools"}
                        btn="Learn More" 
                    />

                    <InfoChild
                        img={LineImageOne}
                        text={"We aggregate real time data & support service exchange to enable actors achieve goals across value and supply chains."}
                        btn="Learn More"
                    />
                </div>
            </div>


            <div className='w-3/6 flex flex-col justify-between py-20 '>
                <div className='flex flex-col justify-between my-auto'>

                    <div className='flex w-[75%]'>
                        <img src={LineImageThree} alt="Line Image" />
                        <div className=' ml-5 relative'>
                            <p className='font-[poppins] text-black/[.8] font-light text-3xl leading-[63px]'>
                                We facilitate a <span className='font-semibold text-black'>decentralized</span>, yet holistic agent network built on easy-to-use conversational platforms. We connect value creators across business runways to facilitate real-time access to key services & data.
                            </p>
                        </div>
                    </div>
                    <div className='ml-14 mt-5'>
                        <a href="#" >
                            <button className='bg-[#051641] rounded-md font-[Light] text-white w-[230px] h-12 flex items-center justify-center'>Learn More
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