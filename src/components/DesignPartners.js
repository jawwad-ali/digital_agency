import ELabs from "./assets/elabs.png"
import InnovativeDesign from "./assets/innovative_design.png"

const DesignPartners = () => {
    return (
        <div className='w-full mt-10 px-5 xl:-mt-5 xl:px-16 lg:px-20'>
            <h2 className='font-[Light] xl:text-[35px] font-medium text-[28px] text-[#31b9b5]'>Technology & Design Partners </h2>

            <div className="xl:flex xl:justify-between xl:w-full xl:mt-5">
                <div className="w-full xl:w-[40%] xl:flex mt-5 mb-10">
                    <div>
                        <h3 className="font-[Light] font-medium text-3xl pb-4">Exto labs</h3>
                        <div className="xl:flex">
                            <p className="font-[Light] text-lg text-[#464646] mx-16">
                                Digital identity & Fintech technology partner
                            </p>
                            <img src={ELabs} alt="Exto labs" className="h-[50px] lg:h-[70px] xl:h-[100px] mt-4 xl:-mt-10 xl:-ml-10" />
                        </div>
                    </div>
                </div>

                <div className="w-full xl:w-[40%] xl:flex mt-5 mb-10">
                    <div className="w-full ">
                        <h3 className="font-[Light] font-medium text-3xl pb-4 text-start xl:w-[70%]">Institute of Design &
                            Innovation</h3>
                        <div className="xl:flex">
                            <p className="font-[Light] text-lg text-[#464646] mx-16">
                                Design & Research partner
                            </p>
                            <img src={InnovativeDesign} alt="Exto labs" className="h-[50px] lg:h-[70px] xl:h-[100px] mt-4 xl:-mt-20 lg:ml-0 xl:ml-[35px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignPartners