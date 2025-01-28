import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import Slider from './Slider';

function Reviews() {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading> Client Review </SectionHeading>
        <div className='w-[90%] sm:w-[80%] mx-auto mt-20'>
            <Slider />
        </div>
    </div>
  )
}

export default Reviews