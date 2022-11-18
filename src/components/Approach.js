import React from 'react'
import Horse from "./assets/horse_img.png"
import CrossImg from "./assets/cross_img.png"
import IdeaSetting from "./assets/idea_setting_img.png"
import CardComponent from './CardComponent'

const btns = ["Agritech", "Researchtech", "Insuretech", "Fintech", "BigData", "Design"]

const Approach = () => {
    return (
        <div className='w-full bg-[#464646] xl:h-[105vh]'>
            <div className='w-full'>
                <h2 className='font-[Light] text-[35px] text-center pt-10 font-medium text-[#f9f9f9] xl:text-[53px]'>Strategic Approach</h2>
                <p className='text-base leading-7 text-center text-[#f9f9f9] p-5 font-[Proxima] xl:text-2xl xl:px-[226px]'>
                    We exist to enable organizations gain a competitive edge in an ever-evolving last mile service landscape by leveraging on an advanced digital agent network platform & next generation technology.
                </p>

                <div className='flex flex-wrap justify-around items-center text-center w-full'>
                    <div className='w-full flex flex-wrap xl:mx-20 justify-around items-center text-center my-5 px-5'>
                        <button style={{ border: "1px solid #f9f9f9" }} className='bg-[#f9f9f9] px-8 py-2 rounded-sm font-[Proxima] my-2  font-semibold text-[12px] xl:text-base  text-[#31b9b5]'>All</button>
                        {btns.map((btn) => (
                            <button style={{ border: "1px solid #f9f9f9" }} className='text-[#f9f9f9] px-8 py-2 rounded-sm font-[Proxima] my-2 font-semibold text-[12px] xl:text-base bg-[#31b9b5]'>{btn}</button>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <div className='xl:flex xl:w-[90%] xl:mx-auto'> 
                    <CardComponent 
                        img={Horse} 
                        h3={"Strategic"}
                        text={"Our technology supports continuous analytics, progress monitoring, and strategic development of innovative solutions to drive competitive advantage for interaction management"}
                    />
                    <CardComponent
                        img={CrossImg}
                        h3={"Tactical"}
                        text={"We embed Behavioral Experimentation to create better, faster, and rewarding experiences in every single interaction —across all channels."}
                    />
                    <CardComponent
                        img={IdeaSetting}
                        h3={"Technology"}
                        text={"NLP, AI & Service Fulfillment APIs to facilitate real time service delivery, analytics and target-based  payments processing"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Approach