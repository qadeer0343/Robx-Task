import React from 'react'
import penLaptop from '../assets/laptopPen.png'
import laptop from '../assets/laptop.png'
import mobile from '../assets/mobile.png'
import { GoArrowUpRight } from 'react-icons/go'

function Section6() {
    return (
        <div>
            <div>
                <div className="w-full h-auto px-5 p-5 flex flex-col gap-5 items-center">
                    <h1 className='text-[40px] font-semibold'>Overview Of Services</h1>
                    <div className="w-full  grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center">
                        <div className="w-[320px] xl:w-[370px] bg-white rounded-lg shadow-md p-4 flex flex-col gap-5">
                            <div>
                                <img src={penLaptop} alt="" />
                            </div>
                            <h2 className="text-lg font-semibold">Bespoke Web Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat </p>
                            <button className=' px-5 py-3 w-max h-auto cursor-pointer  rounded-full border flex items-center justify-center gap-1 text-white bg-gradient-to-r from-[#8061E9] to-[#EA8678]'>Bespoke Web Design<GoArrowUpRight /></button>

                        </div>
                        <div className="w-[320px] xl:w-[370px] bg-white rounded-lg shadow-md p-4 flex flex-col gap-5">
                            <div>
                                <img src={mobile} alt="" />
                            </div>
                            <h2 className="text-lg font-semibold">App Development</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat </p>
                            <button className=' px-5 py-3 w-max h-auto cursor-pointer  rounded-full border flex items-center justify-center gap-1 text-white bg-gradient-to-r from-[#8061E9] to-[#EA8678]'>App Development<GoArrowUpRight /></button>

                        </div>
                        <div className=" w-[320px] xl:w-[370px] bg-white rounded-lg shadow-md p-4 flex flex-col gap-5">
                            <div>
                                <img src={laptop} alt="" />
                            </div>
                            <h2 className="text-lg font-semibold">Digital Marketing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat </p>
                            <button className=' px-5 py-3 w-max h-auto cursor-pointer  rounded-full border flex items-center justify-center gap-1 text-white bg-gradient-to-r from-[#8061E9] to-[#EA8678]'>Digital Marketing<GoArrowUpRight /></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6