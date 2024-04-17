import React from 'react'
import funnel from '../assets/funnel.png'

function Section3() {
  return (
    <div>
      
         <div className='w-full h-auto mt-5  relative flex flex-col gap-5 justify-center items-center'>
            <div className=' w-full lg:w-[80%] h-auto  px-10 flex flex-col items-center justify-center'>
               
                <h1 className=' text-[25px] text-center lg:text-[40px] ] font-semibold '>An Integrated Team for unique Web <br /> design and strategic digital marketing</h1>
                <p className=' text-center mt-5 text-[16px] text-[#433E47] leading-[24px]'>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean <br /> aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam <br /> accumsan vestibulum in sit m accumsan.</p>
            </div>
            <div className='px-10 lg:px-5'>
                <img src={funnel} alt="" />
            </div>
        </div> 
    </div>
  )
}

export default Section3