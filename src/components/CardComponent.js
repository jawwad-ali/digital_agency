const CardComponent = ({ img, h3, text }) => {
    return (
        <div className='px-5 xl:flex mt-8 xl:flex-row xl:w-full'>
            <div className='w-full mb-4 xl:mx-0'>
                <div className='bg-white w-full xl:w-full  border-1 border-red-600' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                    <div className='bg-[#f9f9f9]'>
                        <img src={img} alt="horse img" className='mx-auto py-10 xl:h-60' />
                    </div>

                    <h3 className='-mt-8 font-[Light] font-medium text-3xl ml-5 text-[#292d32] '>{h3}</h3>
                    <div className="xl:h-28">
                        <p className='ml-5 font-[Proxima] font-[18px] text-black/[.5] pb-6'>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent