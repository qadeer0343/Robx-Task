import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import portfolio from '../assets/portfolio.png'
import beach from '../assets/beach.png'
import cosmetic from '../assets/cosmetics.png'
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

function Carousel() {
    
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
        <div className="slider-container  w-[90%] m-auto">
            <Slider {...settings}>
                <div>
                    <div className="w-[100%]  pb-5 ">
                        <div>
                            <img className='' src={portfolio} alt="" />
                        </div>
                        <h2 className=" mx-14 text-lg font-semibold">Redesign of b2b web</h2>
                        <p className='mx-14'>Web design</p>

                    </div>
                </div>
                <div>
                    <div className="w-[100%] pb-5 ">
                        <div>
                            <img src={beach} alt="" />
                        </div>
                        <h2 className=" mx-14 text-lg font-semibold">Mobile application</h2>
                        <p className='mx-14'>App development</p>

                    </div>
                </div>
                <div>
                    <div className="w-[100%] pb-5">
                        <div>
                            <img src={cosmetic} alt="" />
                        </div>
                        <h2 className="mx-14 text-lg font-semibold">E-commerce shop</h2>
                        <p className='mx-14'>Web development</p>

                    </div>
                </div>
                
                <div>
                    <div className="w-[100%] pb-5">
                        <div>
                            <img src={portfolio} alt="" />
                        </div>
                        <h2 className="mx-14 text-lg font-semibold">Redesign of b2b website</h2>
                        <p className='mx-14'>Web design</p>

                    </div>
                </div>
                <div>
                    <div className="w-[100%] pb-5">
                        <div>
                            <img src={beach} alt="" />
                        </div>
                        <h2 className="mx-14 text-lg font-semibold">Mobile application</h2>
                        <p className='mx-14'>App development</p>

                    </div>
                </div>
                <div>
                    <div className="w-[100%] pb-5">
                        <div>
                            <img src={cosmetic} alt="" />
                        </div>
                        <h2 className="mx-14 text-lg font-semibold">E-commerce shop</h2>
                        <p className='mx-14'>Web development</p>

                    </div>
                </div>
                
            </Slider>
        </div>
    )
}

export default Carousel