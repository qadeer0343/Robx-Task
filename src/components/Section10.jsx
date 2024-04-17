import React from "react";
import vs from "../assets/vs.png";
import mac from "../assets/mac.png";
import web from "../assets/web.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import halfwave from '../assets/halfwave.png'

const Insight = () => {
  return (
    <>
      <div className=" h-max w-[100%]  relative">
        <img src={halfwave} className="lg:h-auto h-[90vh] w-full absolute top-0 left-0" alt="" />
        
        <div className="justify-center  relative items-center h-max w-[100%] p-1">
          <h1 className="  text-4xl font-semibold leading-14 text-center text-white mt-28">Latest Insight</h1>
          <div className="flex flex-col mx-auto items-center  w-[100%]   px-5 py-15 sm:px-6" >
            <div className="flex flex-wrap -mx-4 ">
              <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col rounded">
                <img
                  src={vs}
                  alt="Card img"
                  className="object-cover object-center w-full h-54"
                />
                <div className="flex flex-grow">
                  <div className="flex flex-col justify-between px-4 py-6 rounded-b-2xl bg-white border border-gray-400 text ">
                    <div>
                      <a
                        href="#"
                        className="font-montserrat  font-semibold text-left text-2xl block mb-4 leading-tight "
                      >
                        Websites Accesibility And Why It Matters
                      </a>
                      <p className="mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nulla delectus corporis commodi aperiam, amet
                        cupiditate?
                      </p>
                    </div>
                    <div className="mt-2 w-full flex gap-10   justify-between  items-center">
                      <h3 className="font-montserrat text-base font-medium leading-6 text-left">
                        25.01.2024
                      </h3>
                      <a href="">
                        <p className="cardreadmore underline">Read more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 sm:flex flex-col  rounded-2xl">
                <img
                  src={mac}
                  alt="Card img"
                  className="object-cover object-center w-full h-54"
                />
                <div className="flex flex-grow">
                  <div className="triangle"></div>
                  <div className="flex flex-col justify-between px-4 py-6  rounded-b-2xl bg-white border border-gray-400 text">
                    <div>
                      <a
                        href="#"
                        className="font-montserrat  font-semibold text-left text-2xl block mb-4 leading-tight "
                      >
                        Websites Accesibility And Why It Matters
                      </a>
                      <p className="mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nulla delectus corporis commodi aperiam, amet
                        cupiditate?
                      </p>
                    </div>
                    <div className="mt-2 w-full flex gap-10   justify-between  items-center">
                      <h3 className="font-montserrat text-base font-medium leading-6 text-left">
                        25.01.2024
                      </h3>
                      <a href="">
                        <p className="cardreadmore underline">Read more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full hidden max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 lg:flex flex-col  rounded-2xl">
                <img
                  src={web}
                  alt="Card img"
                  className="object-cover object-center w-full h-54"
                />
                <div className="flex flex-grow">
                  <div className="triangle"></div>
                  <div className="flex flex-col justify-between px-4 py-6  rounded-b-2xl bg-white border border-gray-400 text">
                    <div>
                      <a
                        href="#"
                        className="font-montserrat  font-semibold text-left text-2xl block mb-4 leading-tight "
                      >
                        Websites Accesibility And Why It Matters
                      </a>
                      <p className="mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nulla delectus corporis commodi aperiam, amet
                        cupiditate?
                      </p>
                    </div>
                    <div className="mt-2 w-full flex gap-10   justify-between  items-center">
                      <h3 className="font-montserrat text-base font-medium leading-6 text-left">
                        25.01.2024
                      </h3>
                      <a href="">
                        <p className="cardreadmore underline">Read more</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="sm:hidden flex mt-8 p-3 text-1xl gap-10 justify-center items-center">
          <button className="text-purple-800">
            <IoIosArrowBack />
          </button>

          <div className="flex w-max gap-5 ">
            <div
              className="border bg-indigo-700 border-[#785EEB] rounded-full w-[12px] h-[12px]
              "
            ></div>
            <div
              className="border border-[#785EEB] rounded-full w-[12px] h-[12px]
              "
            ></div>
            <div
              className="border border-[#785EEB] rounded-full w-[12px] h-[12px]
              "
            ></div>
          </div>

          <button className="text-purple-800">
            <IoIosArrowForward />
          </button>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insight;










// import React from 'react'
// import halfwave from '../assets/halfwave.png'
// import vs from '../assets/vs.png'
// import mac from '../assets/mac.png'
// import web from '../assets/web.png'

// function Section10() {
//   return (
//     <div>
//         <div className='w-full h-[70vh] relative'>
//             <img className='w-full h-full' src={halfwave} alt="" />
//             <div className=' w-[80%] h-[50vh] bg-red-200'>
//             <div className="card w-[300px] rounded-lg  border  flex flex-col justify-center items-center gap-4 px-5 py-5 ">
//                     <div>
//                         <img src={vs} alt="" />
                       
//                     </div>
//                     <div className='flex flex-col gap-4'>
//                         <p>Lorem ipsum dolor sit amet consectetur. Et adipiscing dolor sapien arcu malesuada semper. Egestas purus nunc at velit erat dignissim</p>
//                         <div className='flex justify-between'>
//                             <h1 className=' font-medium'>Maria Bend, Director</h1>
//                             <p className=' underline  bg-gradient-to-r from-[#8061E9] to-[#FF66C4] bg-transparent bg-clip-text  '>Read more</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Section10