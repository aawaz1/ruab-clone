"use client"
import React, { useState } from 'react'
import { RxHamburgerMenu ,RxCross2 } from "react-icons/rx";


const Header = () => {
    const [sideBar , setSideBar] = useState(false);
  return (
    <div>
         <div className="hidden md:grid grid-cols-7">
    <div className="border flex justify-center item-center border-r-2 border-black p-4 text-black bg-red-500">
      <img alt="logo" className="w-10 h-8" src="https://framerusercontent.com/images/ECJoxrcegm9gMXAoTbe6ozOWDbw.png"/>
    </div>
    <button className="border cursor-pointer hover:rounded-md text-base hover:text-red-500 hover:bg-black text-center border-r-2 border-black p-4 text-black bg-red-500">
      STORE
    </button>
    <button className="border cursor-pointer hover:rounded-md text-base hover:text-red-500 hover:bg-black text-center border-r-2 border-black p-4 text-black bg-red-500">
    TOUR
    </button>
    <button className="border cursor-pointer hover:rounded-md text-base hover:text-red-500 hover:bg-black text-center border-r-2 border-black p-4 text-black bg-red-500">
    MUSIC
    </button>
    <button className="border cursor-pointer hover:rounded-md text-base hover:text-red-500 hover:bg-black text-center border-r-2 border-black p-4 text-black bg-red-500">
    PRESS
    </button>
    <button className="border uppercase cursor-pointer hover:rounded-md text-base hover:text-red-500 hover:bg-black text-center border-r-2 border-black p-4 text-black bg-red-500">
    karyakarta
    </button>
    <button className=" uppercase cursor-pointer  text-base hover:text-red-500 hover:bg-black text-center p-4 text-black bg-red-500">
    About Us
    </button>
    </div>
    <div className='md:hidden grid grid-cols-2'>
    <div className="border flex justify-center item-center  border-white p-4 text-black bg-red-500">
      <img alt="logo" className="w-10 h-8" src="https://framerusercontent.com/images/ECJoxrcegm9gMXAoTbe6ozOWDbw.png"/>
    </div>
    <button onClick={() => setSideBar(!sideBar)} className="border relative cursor-pointer hover:rounded-md text-base hover:text-red-500 hover:bg-black flex justify-center items-center text-center  border-white p-4 text-white bg-black">
     {
        sideBar ? <RxCross2 className='text-2xl'/> :  <RxHamburgerMenu className='text-white text-2xl'/>
     }
      
    </button>
    {
        sideBar && (
            <div className='absolute flex flex-col top-16 border-2 border-white   w-full '>
             <button className="border cursor-pointer hover:rounded-md text-base hover:text-red-500 hover:bg-black text-center  border-white p-4 text-black bg-red-500">
      STORE
    </button>
    <button className=" cursor-pointer hover:rounded-md text-base hover:text-red-500 hover:bg-black text-center border border-white p-4 text-black bg-red-500">
    TOUR
    </button>
    <button className="border cursor-pointer hover:rounded-md text-base hover:text-red-500 hover:bg-black text-center  border-white p-4 text-black bg-red-500">
    MUSIC
    </button>
    <button className="border cursor-pointer hover:rounded-md text-base hover:text-red-500 hover:bg-black text-center  border-white py-4 text-black bg-red-500">
     KARYAKARTA
    </button>
    <button className="border cursor-pointer hover:rounded-md text-base hover:text-red-500 hover:bg-black text-center  border-white py-4 text-black bg-red-500">
     ABOUT US
    </button>
        </div>
        )
    }
   
  

    </div>
    </div>
   
  )
}

export default Header