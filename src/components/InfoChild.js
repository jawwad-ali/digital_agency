import React from 'react'
import RightArrow from "./assets/right_arrow.png"
import LineImageOne from "./assets/line_image_one.png"
import LineImage from "./assets/line_image_three.png"

const InfoChild = ({ img, boldText, text, btn }) => {
    return (
        <div className='w-[75%]'>
            <div className='flex'>
                <img src={img} alt="Line Image" />
                <div className='ml-5 relative w-[100%]'>
                    <p className='font-[poppins]   text-black/[.8] font-light text-3xl leading-[63px]'>
                        <span className='font-semibold text-black'>{boldText}</span> {text}
                    </p>
                </div>
            </div>
            <div className='ml-14 mt-2'>
                <a href="#" >
                    <button className='bg-[#051641] rounded-md font-[Light] text-white w-[230px] h-12 flex items-center justify-center'>
                        {btn}
                        <img src={RightArrow} className="ml-5" />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default InfoChild


