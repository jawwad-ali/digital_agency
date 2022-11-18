import React from 'react'

import GlobePng from "./assets/globe.png"
import RightArrow from "./assets/right_arrow.png"

const Globe = () => {
    return (
        <div className='w-full' id="spaceai">
            <div className='flex xl:flex-row flex-col'>
                <div className='xl:w-3/6 md:w-full lg:w-full transform scale-y-105 '>
                    <img src={GlobePng} alt="Globe" className='w-full' />
                </div>

                <div className='xl:w-3/6 md:w-full lg:w-full bg-[#ace3e1] '>
                    <p className='font-[poppins] text-black/[.8] font-light text-xl md:text-3xl leading-[50px] md:leading-[63px] px-[25px]  pt-[50px] md:py-[75px] md:p-[75px]'>
                        We have built a platform that <span className='text-black font-semibold'>facilitates value-based data acquisition</span> and enhances efficiency in engaging the last mile.
                    </p> <br />
                    <p className='font-[poppins] text-black/[.8] font-light text-xl md:text-3xl leading-[50px] md:leading-[63px] p-[30px] px-[25px]  md:px-[75px] lg:py-0'>
                        SpaceAI then leverages the <span className='text-black font-semibold'> data & network</span> to embed essential services for the underprivilaged.
                    </p>
                    <div className='mt-[3.45rem] flex items-center justify-center'>
                        <a href="#">
                            <button className='bg-[#051641] rounded-md font-[Light] text-white w-[190px] h-12 flex items-center justify-center'>Learn More
                                <img src={RightArrow} className="ml-2" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Globe