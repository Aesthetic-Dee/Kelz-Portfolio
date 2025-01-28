"use client";

import React, {useState, useEffect} from 'react'
import { navLinks } from '@/constant/constant';
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

// Define props type

type Props = {
    openNav: () => void;
}

function Nav({ openNav } : Props) {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            }
            if (window.scrollY < 90) {
                setNavBg(false);
            }
        };

        window.addEventListener("scroll", handler);

        return () => {
            window.removeEventListener("scroll", handler);
        };
    }, []);

  return (
    <div className={`fixed ${navBg ? "bg-[#6aac53]" : "fixed"}
    h-[12vh] z-[10] w-full transition-all duration-200`}>

        <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>

            {/* LOGO */}
            <h1 className='text-white text-2xl font-bold'> <span className='font-pacifico text-emerald-700'>DEE's</span> <span className='font-quicksand'>Portfolio</span> </h1>

            {/* Nav Links */}
            <div className='flex items-center space-x-10 font-Teko'>
                <div className='hidden lg:flex item-center space-x-8 text-3xl'>
                    {navLinks.map((navlink)=>{
                        return (                    
                            <Link key={navlink.id} href={navlink.url}>
                                <p className='nav__link'>{navlink.label}</p>
                            </Link>
                        )
                    })}
                </div>

                {/* Button */}
                <div className='flex items-center space-x-4'>
                    <button className='md:px-5 md:py-1 px-8 py-3 text-emerald-500 font-semibold sm:text-base md:text-2xl
                    bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>
                        <a href="mailto:aestheticdee.mail@gmail.com">Hire Me</a>
                    </button>

                    {/* Burger */}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg-hidden' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav;