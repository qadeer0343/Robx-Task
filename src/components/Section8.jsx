import React from 'react'
import Carousel from './Carousel'
import { GoArrowUpRight } from 'react-icons/go'

function Section8() {
  return (
    <div>
      <div  className='w-full h-auto px-5 py-5 flex gap-5 flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2'>
          <h1 className='font-semibold text-[20px] lg:text-[40px]'>Our Work</h1>
          <p>We don’t claim to be gurus or wizards. We’re just a super experienced, passionate team who knows how to get results for our clients. All our work is custom and thoughtfully designed, written, and developed with your business goals in mind.</p>
        </div>
        <div className='w-full lg:w-1/2  flex  flex-col-reverse'>
        <button className=' px-5 py-3 w-max h-aut0 cursor-pointer  rounded-full  flex items-center justify-center gap-1 text-white bg-gradient-to-r from-[#8061E9] to-[#EA8678]'>VIEW FULL PORTFOLIO<GoArrowUpRight /></button>

        </div>
      </div>
        <Carousel/>
    </div>
  )
}

export default Section8