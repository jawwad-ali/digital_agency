import React from 'react'
import RightArrow from "./assets/right_arrow.png"

const InfoChild = ({ img, boldText, text, btn }) => {
    return (
        <div className='w-full xl:w-[75%] ml-2'>
            <div className='flex'>
                <img src={img} alt="Line Image" className='h-[150px] md:h-[120px] lg:h-[150px] xl:h-[400px]' />
                <div className='ml-3 md:ml-2 relative w-[90%] '>
                    <p className='font-[poppins] text-black/[.8] font-light text-xl xl:text-3xl leading-[35px] md:leading-[55px] xl:leading-[63px]'>
                        <span className='font-semibold text-black'>{boldText}</span> {text}
                    </p>
                </div>
            </div>
            <div className='xl:ml-14 ml-9 md:ml-7 md:mt-0 mt-2 mb-5'>
                <a href="#" >
                    <button className='bg-[#051641] rounded-md font-[Light] text-white xl:w-[230px] w-[200px] h-10 xl:h-12 flex items-center justify-center'>
                        {btn}
                        <img src={RightArrow} className="ml-5" />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default InfoChild


