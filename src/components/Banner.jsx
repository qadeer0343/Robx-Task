import React from 'react'
import bgImg from '../assets/bg.png'
import wave from '../assets/wave.png'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'
import { GoArrowUpRight } from "react-icons/go";

function Banner() {
    return (
        <div className='font-montserrat'>
            <div className='w-full h-[105vh] bg-no-repeat  overflow-hidden bg-cover relative'
                style={{ backgroundImage: `url(${bgImg})` }}>
                <nav className='w-full h-[8vh]  flex justify-between items-center px-5 md:px-16 '>
                    <div className=''>
                        <img src={logo} alt="" />
                    </div>
                    <div className='cursor-pointer  '>
                        <img src={menu} alt="" />
                    </div>
                </nav>
                <div className='w-full md:w-[80%] h-auto flex flex-col gap-5 px-10 lg:px-28 xl:px-[200px] items-center text-center  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                     <h1 className='text-[35px] md:text-[50px] xl:text-[70px] font-bold text-white'>WEB MAGNETISM</h1>
                     <p className='text-[18px] lg:text-xl xl:text-2xl text-white '>Transforming Businesses with unique Web design and strategic digital marketing for impactful online visibility.</p>
                     <button className=' cursor-pointer px-5 py-2 md:px-8 md:py-3 rounded-full border flex items-center gap-1 text-white bg-gradient-to-r from-[#FF66C4] to-#EA8678]'>GET A PROPOSAL <GoArrowUpRight /></button>
                </div>
                <div className='w-full '>
                    <img className='w-full h-full absolute top-[85%] left-0' src={wave} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner