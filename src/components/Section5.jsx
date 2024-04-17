import React from 'react'
import bg from '../assets/bg.png'
import waves from '../assets/waves.png'
import { GoArrowUpRight } from 'react-icons/go'
import Icon from '../assets/icon.svg'

function Section5() {
    return (
        <div>
            <div className=' w-full h-[210vh] lg:h-[150vh] relative'>

                <div className='w-full h-full  bg-no-repeat bg-center bg-cover absolute top-[-100px] z-[-10] left-0'
                    style={{ backgroundImage: `url(${bg})` }}>
                    <div className='w-full h-screen bg-no-repeat bg-center flex flex-col lg:flex-row bg-cover absolute top-40'
                        style={{ backgroundImage: `url(${waves})` }}>
                        <div className='py-10 px-5 md:px-10 text-center lg:text-start'>

                            <div className='w-full  h-full    xl:px-20 flex flex-col items-center lg:items-start gap-3'>
                                <h1 className='text-[30px] lg:text-[50px] text-white  '>Our bespoke website include the fllowing</h1>
                                <div className=''>
                                    <p className='leading-[27px] text-[#ffff]  text-[18px]'>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsa</p>

                                </div>
                                <button className=' px-5 py-3 w-[150px] h-auto cursor-pointer  rounded-full  flex items-center justify-center gap-1 text-white bg-gradient-to-r from-[#8061E9] to-[#EA8678]'>ABOUT US<GoArrowUpRight /></button>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-5 justify-center items-center  lg:px-20 '>
                            <div className='w-[80%] lg:w-full rounded-xl  flex flex-col gap-5 px-5 py-5 lg:py-3 xl:h-[40vh] bg-white shadow-lg'>
                                <div className='flex gap-5  items-center'>
                                    <div className='w-[75px] h-[75px]'>
                                        <img className='w-[100%] h-[100%]' src={Icon} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-[16px] md:text-[22px] xl:text-[30px] font-semibold'>Take Control of Your <br /> Entire  Marketing Landscape</p>
                                    </div>
                                </div>
                                <p>We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.</p>
                            </div>
                            <div className='w-[80%] lg:w-full rounded-xl flex flex-col gap-5 px-5 py-5 lg:py-3 xl:h-[40vh] bg-white shadow-lg'>
                                <div className='flex gap-5  items-center'>
                                    <div className='w-[75px] h-[75px]'>
                                        <img className='w-[100%] h-[100%]' src={Icon} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-[16px] md:text-[22px] xl:text-[30px] font-semibold'>Take Control of Your <br /> Entire  Marketing Landscape</p>
                                    </div>
                                </div>
                                <p>We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.</p>
                            </div>
                            <div className='w-[80%] lg:w-full rounded-xl flex flex-col gap-5 px-5 py-5 lg:py-3 xl:h-[40vh] bg-white shadow-lg'>
                                <div className='flex gap-5  items-center'>
                                    <div className='w-[75px] h-[75px]'>
                                        <img className='w-[100%] h-[100%]' src={Icon} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-[16px] md:text-[22px] xl:text-[30px] font-semibold'>Take Control of Your <br /> Entire  Marketing Landscape</p>
                                    </div>
                                </div>
                                <p>We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5