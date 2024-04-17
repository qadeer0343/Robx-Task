import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import portfolio from '../assets/portfolio.png'
import beach from '../assets/beach.png'
import cosmetic from '../assets/cosmetics.png'
import manglasses from '../assets/manglasses.png'
import girl from '../assets/girl.png'
import buisness from '../assets/buisness.png'
import { GoArrowUpRight, GoArrowUpLeft } from 'react-icons/go';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const NextArrow = ({onClick}) => {
    return(
        <>
            <button className=' absolute z-10 text-2xl -bottom-6 left-[75%] md:left-[55%] lg:left-[52.5%] xl:left-[53%]  text-blue-500 -translate-x-[-50%]' onClick={onClick}><FiChevronRight/></button>
        </>
    )
}

const PrevArrow = ({onClick}) => {
    return(
        <>
            <button className='   text-2xl absolute z-10 -bottom-6 left-[12%]  md:left-[38%] lg:left-[42%] xl:left-[43.5%] text-blue-500 -translate-x-[-50%]' onClick={onClick}><FiChevronLeft/></button>
        </>
    )
}

function Sec9Carousel() {
    
    const [change, setchange] = useState("")
    console.log(change);

    var settings = {
        customPaging: function(i) {
            console.log(i);
            return (
             <div className=' mt-1 w-5 h-5  border border-blue-500 focus:bg-blue-500 rounded-full'></div>
            );
          },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        afterChange:(i)=>{
            setchange(i)
        },
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="slider-container  w-[95%] m-auto ">
            <Slider {...settings}>
                <div className='flex'>
                    <div className="w-[100%] pb-5 ">
                      
                    <div className="card rounded-lg  border  flex flex-col justify-center items-center gap-4 px-5 py-5 ">
                    <div>

                        <div className="pic w-[100px] h-[100px] border rounded-full">
                            <img src={buisness} alt="" />
                        </div>
                        <div>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
                        <div className='flex justify-between'>
                            <h1 className=' font-medium'>Maria Bend, Director</h1>
                            <p className='cardreadmore '>Read more</p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                <div>
                    <div className="w-[100%] pb-5 ">
                      
                    <div className="card rounded-lg  border flex flex-col justify-center items-center gap-4 px-5 py-5 ">
                    <div>

                        <div className="pic w-[100px] h-[100px] border rounded-full">
                        <img src={girl} alt="" />

                        </div>
                        <div>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
                        <div className='flex justify-between'>
                            <h1 className=' font-medium'>Maria Bend, Director</h1>
                            <p className=' underline  bg-gradient-to-r from-[#8061E9] to-[#FF66C4] bg-transparent bg-clip-text  '>Read more</p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                <div>
                    <div className="w-[100%] pb-5">
                        
                    <div className="card rounded-lg border flex flex-col justify-center items-center gap-4 px-5 py-5 ">
                    <div>

                        <div className="pic w-[100px] h-[100px] border rounded-full">
                            <img src={manglasses} alt="" />
                        </div>
                        <div>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
                        <div className='flex justify-between'>
                            <h1 className=' font-medium'>Maria Bend, Director</h1>
                            <p className=' underline  bg-gradient-to-r from-[#8061E9] to-[#FF66C4] bg-transparent bg-clip-text  '>Read more</p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                
                <div>
                    <div className="w-[100%] pb-5">
                       
                    <div className="card rounded-lg border flex flex-col justify-center items-center gap-4 px-5 py-5 ">
                    <div>

                        <div className="pic w-[100px] h-[100px] border rounded-full">
                            <img src={buisness} alt="" />
                        </div>
                        <div>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
                        <div className='flex justify-between'>
                            <h1 className=' font-medium'>Maria Bend, Director</h1>
                            <p className=' underline  bg-gradient-to-r from-[#8061E9] to-[#FF66C4] bg-transparent bg-clip-text  '>Read more</p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                <div>
                    <div className="w-[100%] pb-5">
                       
                    <div className="card rounded-lg border flex flex-col justify-center items-center gap-4 px-5 py-5 ">
                    <div>

                        <div className="pic w-[100px] h-[100px] border rounded-full">
                            <img src={girl} alt="" />
                        </div>
                        <div>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
                        <div className='flex justify-between'>
                            <h1 className=' font-medium'>Maria Bend, Director</h1>
                            <p className=' underline  bg-gradient-to-r from-[#8061E9] to-[#FF66C4] bg-transparent bg-clip-text  '>Read more</p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                <div>
                    <div className="w-[100%] pb-5">
                    <div className="card rounded-lg border flex flex-col justify-center items-center gap-4 px-5 py-5 ">
                    <div>

                        <div className="pic w-[100px] h-[100px] border rounded-full">
                            <img src={manglasses} alt="" />
                        </div>
                        <div>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                            <span className="text-yellow-500 text-2xl">&#9733;</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
                        <div className='flex justify-between'>
                            <h1 className=' font-medium'>Maria Bend, Director</h1>
                            <p className=' underline  bg-gradient-to-r from-[#8061E9] to-[#FF66C4] bg-transparent bg-clip-text  '>Read more</p>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                
            </Slider>
        </div>
    )
}

export default Sec9Carousel