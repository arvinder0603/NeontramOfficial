"use client" 
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { BsFillStarFill } from "react-icons/bs";

const Card = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })  
  }, []);
  return (
    <div data-aos="zoom-out-down" className=' shadow-2xl lg:w-[600px] '>

  <div className='shadow-2xl rounded-3xl flex flex-col justify-center  '>

     <div className='flex justify-center'>

     <Image className='rounded-3xl lg:w-[400px] lg:h-[300px]' src={props.src} ></Image>

     </div>
     
     <div className='m-4'>

  
    <h1 className='text-[30px] font-bold font-sans flex justify-center '>{props.name}</h1>
    <h1>
      {props.review}
    </h1>
   
    </div>

  </div>
        

    </div>
  )
}

export default Card