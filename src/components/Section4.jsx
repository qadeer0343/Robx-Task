import React from 'react'
import ovalBg from '../assets/oval.png'
import Icon from '../assets/icon.svg';
import msgIcon from '../assets/msg.svg';
import pointIcon from '../assets/pointer.svg';

function Section4() {
    return (
        <div>
            <div
                className='w-full h-auto  mt-10 bg-no-repeat bg-center lg:bg-cover flex gap-5 flex-col items-center relative'
                style={{ backgroundImage: `url(${ovalBg})` }}>

                <h1 className=' text-[40px] font-semibold mt-20'>Why Choose Us</h1>
                <div className='w-[80%] md:w-[60%] lg:w-[90%]   h-auto  grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className='rounded-xl flex flex-col gap-5 px-5 py-5 lg:py-3 xl:h-[40vh] bg-white shadow-lg'>
                        <div className='flex gap-5  items-center'>
                            <div className='w-[75px] h-[75px]'>
                                <img className='w-[100%] h-[100%]' src={pointIcon} alt="" />
                            </div>
                            <div>
                                <p className='text-[16px] md:text-[22px] xl:text-[30px] font-semibold'>Take Control of Your <br /> Entire  Marketing Landscape</p>
                            </div>
                        </div>
                        <p>We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.</p>
                    </div>
                    <div className='rounded-xl flex flex-col gap-5 px-5 py-5 lg:py-3 xl:h-[40vh] bg-white shadow-lg'>
                        <div className='flex gap-5  items-center'>
                            <div className='w-[75px] h-[75px]'>
                                <img className='w-[100%] h-[100%]' src={Icon} alt="" />
                            </div>
                            <div>
                                <p className='text-[16px] md:text-[22px] xl:text-[30px] font-semibold'>Your Business's Dedicated Marketing Wing</p>
                            </div>
                        </div>
                        <p>Even if your business is modest in size, having a well-versed extension focused on digital marketing provides a distinct competitive edge.</p>
                    </div>
                    <div className='rounded-xl flex flex-col gap-5 px-5 py-5 lg:py-3 xl:h-[40vh] bg-white shadow-lg'>
                        <div className='flex gap-5  items-center'>
                            <div className='w-[75px] h-[75px]'>
                                <img className='w-[100%] h-[100%]' src={msgIcon} alt="" />
                            </div>
                            <div>
                                <p className='text-[16px] md:text-[22px] xl:text-[30px] font-semibold'>A Reliable Collaborator</p>
                            </div>
                        </div>
                        <p>Our exceptional team members function seamlessly as an integral part of your team, fully committed to your success and the sanctity of your brand.</p>
                    </div>
                    
                    

                </div>




            </div>
        </div>
    )
}

export default Section4