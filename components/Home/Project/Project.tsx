import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import {projectData} from "@/Data/data";
import Image from "next/image";
import Link from "next/link";


function Project() {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading>My Projects</SectionHeading>
        <div className='w-[90%] mx-auto mt-20 grid grid-cols-1
         md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
            {projectData.map((project, i) => {
                return (
                    <div
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-center'
                    data-aos-delay={`${i * 150}`}
                    key={project.id} className='bg-[#2c7d0f] p-
                     rounded-lg hover:scale-105 transition-all duration-300'>
                        <Link href={project.url} target='_blank'>

                            <Image src={project.image}
                             alt="project" width={300} height={300}
                             className='w-full'></Image>
                        </Link>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Project;