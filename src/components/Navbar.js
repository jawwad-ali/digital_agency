import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className='bg-[#D9D9D9] text-white flex rounded-md mx-7'>
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className='h-28 pl-3' />
      </div>

      {/* nav items */}
      <div className='my-auto w-full px-10 hidden lg:block'>
        <ul className='flex'> 
          <div className="flex justify-center text-center items-center font-[poppins]  text-base text-black">
            <li className=''><a href="/">Home</a></li>
            <li className='mx-6'><a href="#">Space AI</a></li>
          </div>
          <div className='flex-1 flex justify-end text-center items-center font-[poppins]  text-base text-black'>
            <li className='mx-6'><a href="#">Partners</a></li>
            <li className='mx-4'><a href="#">Contact</a></li>
          </div>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar