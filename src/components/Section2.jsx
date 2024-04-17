import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import sec2pic from '../assets/sec2Img.png'

function Section2() {
    return (
        <div>
            <div className='w-full h-auto lg:h-[80vh] py-10 gap-10 flex flex-col-reverse lg:flex-row '>
                <div className='w-full lg:w-[50%] h-full  px-10 xl:px-20 flex flex-col items-center lg:items-start gap-3'>
                    <h1 className='text-[25px]  md:text-[30px] xl:text-[40px] font-semibold'>Welcome To Web Magnetism </h1>
                    <div className='flex flex-col gap-4 px-2'>
                        <p className='leading-[27px] text-[#433E47]  text-[18px]'>Your hub for bespoke web design and digital marketing success. We seamlessly merge creativity and <span className='font-medium'>SEO expertise</span> to craft visually stunning websites that magnetize audiences.</p>
                        <p className='leading-[27px] text-[#433E47]  text-[18px]'>Our digital marketing, from SEO mastery to impactful campaigns, ensures your brand's resonance online. At Web Magnetism, we're not just designers;<span className='font-medium'> we're digital architects</span>, sculpting unique online experiences that elevate your brand.</p>
                        <p className='leading-[27px] text-[#433E47]  text-[18px]'>Navigate the digital landscape with confidence – choose Web Magnetism for tailored web design and <span className=' font-medium'>strategic digital marketing</span>, where innovation meets results for a compelling online journey.</p>

                    </div>
                        <button className=' px-5 py-3 w-[150px] h-auto cursor-pointer  rounded-full border flex items-center justify-center gap-1 text-white bg-gradient-to-r from-[#8061E9] to-[#EA8678]'>ABOUT US<GoArrowUpRight /></button>
                </div>
                <div className='w-full lg:w-[50%] h-full flex items-center lg:items-start justify-center lg:justify-normal  px-10 py-3'>
                    <img className='' src={sec2pic} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section2