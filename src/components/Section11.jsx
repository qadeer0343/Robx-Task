import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function Section11() {
    return (
        <div>
            <div className='w-full h-auto lg:h-screen  flex flex-col lg:flex-row border  items-center bg-[#F3F2FF]' >
                <div className=' w-full lg:w-1/2 h-full  py-10 px-5 md:px-10 text-center lg:text-start'>

                    <div className='w-full  h-full    xl:px-20 flex flex-col items-center lg:items-start gap-3'>
                        <h1 className='text-[30px] lg:text-[50px] '>Let’s talk about your project</h1>
                        <div className=''>
                            <p className='leading-[27px] text-[#433E47]  text-[18px]'>Do you have a project in mind, that you feel our approach would work well for?</p>
                            <p className='leading-[27px] text-[#433E47]  text-[18px]'>We’re always happy to discuss your project with you and put together a free proposal.</p>

                        </div>
                    </div>
                </div>
                <div className=' w-full lg:w-1/2 h-full flex flex-col gap-5 justify-center items-center  lg:px-20 py-5 '>
                    <div className="inp w-full h-full px-5 py-5 border flex flex-col gap-5 rounded-2xl bg-white">
                        <h1 className=' font-bold text-[20px]'> Just fill out the form below  to get started.</h1>
                        <input className='py-3 px-5 outline-none rounded-lg border border-[#CACACA]' type="text" name="" id="" placeholder='Name' />
                        <input className='py-3 px-5 outline-none rounded-lg border border-[#CACACA]' type="text" name="" id="" placeholder='Email' />
                        <input className='py-3 px-5 outline-none rounded-lg border border-[#CACACA]' type="text" name="" id="" placeholder='Company' />
                        <input className='py-3 px-5 outline-none rounded-lg border border-[#CACACA]' type="text" name="" id="" placeholder='Phone Number' />
                        <input className='py-3 px-5 outline-none rounded-lg border border-[#CACACA] ' type="file" name="" id="" placeholder='Send Us Your Brief' />
                        <textarea className='p-3 px-5 rounded-lg border border-[#CACACA]' name="" id="" cols="20" rows="5" placeholder='Message'></textarea>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="" id="" />
                            <p>I agree to have my information stored <span className=' text-red-500 cursor-pointer'>Privacy Policy.</span></p>

                        </div>
                        <button className=' px-5 py-3 w-full lg:w-max  h-auto cursor-pointer  rounded-lg  flex items-center justify-center gap-1 text-white bg-gradient-to-r from-[#8061E9] to-[#EA8678]'>Send Your Messages</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section11