'use client'
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { clientReviews } from '@/Data/data';
import ReviewCard from './ReviewCard';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slideToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slideToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slideToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slideToSlide: 1,
    }
  };

function Slider() {
  return (
    <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000}
     infinite responsive={responsive}>
        {clientReviews.map((review) => {
            return <div key={review.image}>
                {/* Review Card */}
                <ReviewCard review={review} />
            </div>;
        })}
     </Carousel>
  )
}

export default Slider;