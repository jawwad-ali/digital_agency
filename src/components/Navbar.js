import React, { useState } from 'react'
import logo from "./assets/logo.png"

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <nav className='bg-[#D9D9D9] text-white flex rounded-md mx-7' >
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className='h-22 lg:h-28 lg:pl-3' />
      </div>

      <section className="MOBILE-MENU flex w-full justify-end items-center pr-7 lg:hidden">
        <div
          className="HAMBURGER-ICON cursor-pointer space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click 
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-black cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <li className="text-black my-8 uppercase font-[poppins] text-base">
              <a href="/">Home</a>
            </li>
            <li className="text-black my-8 uppercase font-[poppins] text-base">
              <a href="#spaceai">Space AI</a>
            </li>
            <li className="text-black my-8 uppercase font-[poppins] text-base">
              <a href="#partner">Partners</a>
            </li>
            <li className="text-black my-8 uppercase font-[poppins] text-base">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Desktop menu */}
      <div className='my-auto w-full px-10 hidden lg:block'>
        <ul className='flex'>
          <div className="flex justify-center text-center items-center font-[poppins] text-base text-black">
            <li className=''><a href="/">Home</a></li>
            <li className='mx-6'><a href="#spaceai">Space AI</a></li>
          </div>
          <div className='flex-1 flex justify-end text-center items-center font-[poppins] text-base text-black'>
            <li className='mx-6'><a href="#partner">Partners</a></li>
            <li className='mx-4'><a href="#contact">Contact</a></li>
          </div>
        </ul>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </nav>
  )
}

export default Navbar