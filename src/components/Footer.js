import FooterLogo from "./assets/footer_logo.png"
import PinIcon from "./assets/pin.png"
import PhoneIcon from "./assets/phone.png"
import EmailIcon from "./assets/email.png"
import Copyright from "./assets/copyright.png"

const Footer = () => {
    return (
        <div className="w-full bg-[#051641] py-20 px-10 xl:px-20 xl:pb-10" id="contact">
            <div className="w-full border-b border-slate-100 mb-5 pb-10 xl:flex xl:items-start">
                <div className="xl:w-3/6 ">
                    <img src={FooterLogo} alt="Logo" />
                    <p className="text-[#f1f1f2] text-lg font-[Light] mt-5">talk to us</p>
                </div> 

                <div className="mt-10 xl:mt-0 xl:w-3/6">
                    <h3 className="font-[Light] font-medium text-[22px] text-[#f9f9f9]">Contact Us</h3>
                    <div className="mt-3 flex flex-col xl:flex-row w-[75%] xl:w-full justify-around md:justify-start -ml-5 md:ml-0">
                        <div className="flex xl:flex-row justify-around md:justify-start my-2">
                            <img src={PinIcon} alt="Pin" />
                            <p className="pl-2 text-[#f9f9f9] text-lg font-[Proxima]">Limuru Rd, Nairobi</p>
                        </div>
                        <div className="flex justify-around my-2 md:justify-start lg:ml-0">
                            <img src={PhoneIcon} alt="Phone Image" className="xl:ml-3 lg:ml-0 " />
                            <p className="pl-2 text-[#f9f9f9] text-lg font-[Proxima]">+254 769 533 786</p>
                        </div>
                        <div className="flex justify-around my-2 md:justify-start lg:ml-0">
                            <img src={EmailIcon} alt="Phone Image" className="xl:ml-3 lg:ml-0 " />
                            <p className="pl-2 text-[#f9f9f9] text-lg font-[Proxima]">mambo@spaceai.io</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 flex items-center justify-between">
                <div className="flex items-center justify-between"> 
                    <img src={Copyright} alt="Copyright" />
                    <p className="text-[#31b9b5] text-base font-[Light] ml-2">Space Infinitus limited</p>
                </div>
                <div>
                    <p className="text-[#31b9b5] text-base font-[Light] ml-2">2022</p>
                </div>
            </div>

        </div>
    )
}

export default Footer