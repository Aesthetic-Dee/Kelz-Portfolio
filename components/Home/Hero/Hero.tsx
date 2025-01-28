import React from 'react';
import {BaseInfo} from "@/Data/data";
import { FaDownload } from "react-icons/fa";
import Image from 'next/image';

function Hero() {
  return (
    <div className='w-full pt-[4vh] md:pt-[16vh] h-screen bg-[#0f0715]
     overflow-hidden relative'>
        <div className='flex flex-col justify-center w-4/5 h-full mx-auto'>
            <div className='items-center gap-12'>
                {/* Text Context */}
                <div>
                    {/* Title */}
                    <h1
                     data-aos="fade-right"
                     data-aos-delay="100"
                     className='font-Teko text-bg text-3xl sm:text-4xl md:text-7xl
                    lg:text-7xl xl:text-7xl font-bold md:leading-[3rem]
                    lg:leading-[3.5rem] xl:leading-[4rem] text-white'>
                        {BaseInfo.position}
                    </h1>


                    {/* Description */}
                    <p
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className='font-Teko mt-6 text-sm md:text-5xl text-white text-opacity-80'>
                        {BaseInfo.description}
                    </p>


                    {/* Button */}
                    <button
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        className='md:px-8 md:py-2.5 px-6 py-1.5 text-white
                        font-semibold text-sm md:text-2xl transition-all duration-200
                        rounded-lg mt-8 bg-[#6aac53] hover:bg-[#51823f] flex 
                        items-center space-x-2 font-Teko'
                        // href={"Dee Int -Resume.pdf"}
                        onClick={() => window.open("Dee Int -Resume.pdf")}
                        >
                        <span> View Or Download CV</span>
                        <FaDownload />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;