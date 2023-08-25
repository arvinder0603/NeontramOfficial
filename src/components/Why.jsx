"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import React from 'react';
import care from "../assets/care.jpg"
import research from "../assets/research.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Why = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })  
  }, []);

  return (
    <div
      ref={containerRef}
      className=' mt-[160px] h-[100vh]   flex  flex-col gap-12 mb-[100px]'
      // Set initial background color here if needed
    >
      <h4 className='flex justify-center font-extrabold font-sans text-[50px] mb-14'>WHY NEONTRAM ?</h4>

      <div className='grid  lg:grid-cols-3 lg:grid-rows-2 gap-44 ml-4'>
      <div data-aos="fade-up-right" className='flex justify-center content-center  bg-slate-100 lg:h-[300px]  rounded-2xl shadow-2xl shadow-[#8186D9]'
          >
           <Image src={care} className='rounded-2xl' alt='/'></Image>
          </div>
          <div className='flex justify-center  bg-slate-100 lg:h-[300px]  rounded-2xl shadow-2xl shadow-[#8186D9]'
          >
            <Image src={research} className='rounded-2xl' alt='/'></Image>
          </div>
          <div data-aos="fade-up-left" className='flex justify-center  bg-slate-100 lg:h-[300px]  rounded-2xl shadow-2xl shadow-[#8186D9]'
          >
            <h1>jhsd</h1>
          </div>
          <div data-aos="fade-up-right" className='flex justify-center  bg-slate-100 lg:h-[300px]  rounded-2xl shadow-2xl shadow-[#8186D9]'
          >
            <h1>jhsd</h1>
          </div>
          <div className='flex justify-center  bg-slate-100 lg:h-[300px]  rounded-2xl shadow-2xl shadow-[#8186D9]'
          >
            <h1>jhsd</h1>
          </div>
          <div data-aos="fade-up-left" className='flex justify-center  bg-slate-100 lg:h-[300px]  rounded-2xl shadow-2xl shadow-[#8186D9]'
          >
            <h1>jhsd</h1>
          </div>
      </div>
    </div>
  );
};

export default Why;
