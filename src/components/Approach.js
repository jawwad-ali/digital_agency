import React from 'react'
import Horse from "./assets/horse_img.png"
import CrossImg from "./assets/cross_img.png"
import IdeaSetting from "./assets/idea_setting_img.png"

const Approach = () => {
    return (
        <div className='w-full bg-[#464646] xl:h-[105vh]'>
            <div className='w-full'>
                <h2 className='font-[Light] text-[35px] text-center pt-10 font-medium text-[#f9f9f9] xl:text-[53px]'>Strategic Approach</h2>
                <p className='text-base leading-7 text-center text-[#f9f9f9] p-5 font-[Proxima] xl:text-2xl xl:px-[226px]'>
                    We exist to enable organizations gain a competitive edge in an ever-evolving last mile service landscape by leveraging on an advanced digital agent network platform & next generation technology.
                </p>

                <div className='flex flex-wrap justify-around items-center text-center w-full '>
                    <div className='w-full flex flex-wrap xl:mx-20 justify-around items-center text-center my-5 px-5'>
                        <button className='bg-[#f9f9f9]  px-8 py-2 rounded-sm font-[Proxima] my-2  font-semibold text-[12px] xl:text-base  text-[#31b9b5]'>All</button>
                        <button className='text-[#f9f9f9] px-8 py-2 rounded-sm font-[Proxima] my-2 font-semibold text-[12px] xl:text-base bg-[#31b9b5]'>Agritech</button>
                        <button className='text-[#f9f9f9] px-8 py-2 rounded-sm font-[Proxima] my-2 font-semibold text-[12px] xl:text-base bg-[#31b9b5]'>Researchtech</button>
                        <button className='text-[#f9f9f9] px-8 py-2 rounded-sm font-[Proxima] my-2 font-semibold text-[12px] xl:text-base bg-[#31b9b5]'>Insuretech</button>
                        <button className='text-[#f9f9f9] px-8 py-2 rounded-sm font-[Proxima] my-2 font-semibold text-[12px] xl:text-base bg-[#31b9b5]'>Fintech</button>
                        <button className='text-[#f9f9f9] px-8 py-2 rounded-sm font-[Proxima] my-2 font-semibold text-[12px] xl:text-base bg-[#31b9b5]'>Bigdata</button>
                        <button className='text-[#f9f9f9] px-8 py-2 rounded-sm font-[Proxima] my-2 font-semibold text-[12px] xl:text-base bg-[#31b9b5]'>Design</button>
                    </div>
                </div>

                {/* Cards */}
                <div className='px-10 xl:flex w-full mt-8'>
                    <div className='w-full mb-4 md:mx-[30px]'>
                        <div className='bg-white w-full xl:w-full pb-4' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                            <div className='bg-[#f9f9f9]'>
                                <img src={Horse} alt="horse img" className='mx-auto py-10' />
                            </div>
                            <h3 className='-mt-8 font-[Light] font-medium text-3xl ml-5 text-[#292d32] py-5'>Strategic</h3>
                            <p className='ml-5 font-[Proxima] font-[18px] text-black/[.5]  pb-5'>Our technology supports continuous analytics, progress monitoring, and strategic development of innovative solutions to drive competitive advantage for interaction management</p>
                        </div>
                    </div>

                    <div className='w-full  mb-4 md:mx-[30px]'>
                        <div className='bg-white w-full xl:w-full pb-8' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                            <div className='bg-[#f9f9f9]'>
                                <img src={CrossImg} alt="horse img" className='mx-auto py-10' />
                            </div>
                            <h3 className='-mt-8 font-[Light] font-medium text-3xl ml-5 text-[#292d32] py-5'>Tactical</h3>
                            <p className='ml-5 font-[Proxima] font-[18px] text-black/[.5] pb-5'>We embed Behavioral Experimentation
                                to create better, faster, and rewarding
                                experiences in every single
                                interaction —across all channels.
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:mx-[30px]'>
                        <div className='bg-white w-full xl:w-full pb-8' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                            <div className='bg-[#f9f9f9]'>
                                <img src={IdeaSetting} alt="horse img" className='mx-auto py-10' />
                            </div>
                            <h3 className='-mt-8 font-[Light] font-medium text-3xl ml-5 text-[#292d32] py-5'>Technology</h3>
                            <p className='ml-5 font-[Proxima] font-[18px] text-black/[.5]  pb-5'>NLP, AI & Service Fulfillment APIs to
                                facilitate real time service delivery,
                                analytics and target-based
                                payments processing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Approach