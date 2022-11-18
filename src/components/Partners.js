import React from 'react'
import NandiCountryImg from "./assets/nandi_county.png"
import KcbFoundationImg from "./assets/kcb_foundation.png"
import Konza from "./assets/konza.png"
import LineImg from "./assets/line.png"
import BottomLine from "./assets/bottom_line.png"

const Partners = () => {
    return (
        <div className='w-full mt-10 px-5 xl:mt-44 xl:px-16 lg:px-20' id="partner">
            <h2 className='font-[Light] xl:text-[35px] font-medium text-[28px] text-[#31b9b5]'>Implementation Partners </h2>

            <div className='w-full mt-5 xl:flex'>

                <div className='mb-10 xl:w-1/3'>
                    <img src={NandiCountryImg} alt="Nandi County" />
                    <h3 className='-mt-5 font-[Light] inline-block font-medium text-3xl text-[#051641] pt-10'>Nandi County</h3>
                    <img src={LineImg} alt="Line img" className='ml-5 xl:inline-block hidden' />
                    <p className='font-[Proxima] text-base mt-5 ml-4 text-[#46464] xl:ml-14'>
                        As a Digital First County, Space is working with Nandi County to establish a digital trust ecosystem for the dairy sector for a data led growth plan
                    </p>
                    <img src={BottomLine} alt="bottom line" className='xl:ml-16 mt-5' />

                </div>

                <div className='mb-10 xl:w-1/3 pt-10'>
                    <img src={KcbFoundationImg} alt="KCB foundation" className='' />
                    <h3 className=' font-[Light] inline-block font-medium text-3xl text-[#051641] xl:pt-[74px] pt-10'>KCB Foundation</h3>
                    {/* <img src={LineImg} alt="Line img" className='ml-5 inline-block' /> */}
                    <p className='font-[Proxima] text-base mt-5 ml-4 text-[#46464] xl:ml-24'>
                        Working with KCB Foundation to; <br />
                        1. Re-Defining MSMEs Banking through futuristic last mile data acquisition <br />
                        2. Neo-Coperatives - a collaboration to creaet the future of agritech
                    </p>
                    <img src={BottomLine} alt="bottom line" className='xl:ml-16 ' />

                </div>

                <div className='xl:w-[38%] -mt-8 mb-10 pt-10'>
                    <img src={Konza} alt="Konza" />
                    <h3 className='-mt-5 font-[Light] inline-block font-medium text-3xl text-[#051641] pt-10'>Konza Technopolis</h3>
                    <img src={LineImg} alt="Line img" className='ml-5 xl:inline-block hidden' />
                    <p className='font-[Proxima] text-base mt-5 ml-4 text-[#46464] xl:px-14'>
                        The inception of Public-Private partnership aimed at positioning KOTDA as a Platform to spear head Public sector innovations
                    </p>
                    <img src={BottomLine} alt="bottom line" className='xl:ml-16 mt-5' />
                </div>

            </div>

        </div>
    )
}

export default Partners