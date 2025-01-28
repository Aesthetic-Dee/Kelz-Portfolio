'use client'
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About'
import Service from './Servicess/Service';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import Reviews from './Reviews/Reviews';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      });
    };

    initAOS();
  }, []);
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Service />
      <Project />
      <Skills />
      {/* <Reviews />
      <Blog /> */}
      <Contact />
    </div>
    
  );
};

export default Home