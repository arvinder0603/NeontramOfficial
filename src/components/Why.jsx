"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image'
import React from 'react'
import man from "../assets/man.png"

const Why = () => {
  
  return (
    <div className='mt-[100px] h-[100vh]'>
       
       <div className='flex justify-center'>
        <h1 className='text-[70px] font-extrabold'>Why Neontram</h1>
       </div>

       <div className='grid grid-cols-2 mt-[100px]'>
        <div className='flex justify-center items-center m-8'>
        <h1 className='mt-12 lg:text-[26px] text-[18px]  text-gray-500 mb-6'><span className=' font-bold text-[#4166f9]' >NeonTram</span> captures the essence of innovation and growth for newborns.<br /> "Neon" suggests a radiant, vibrant start, symbolizing new life, while "Tram" <br />signifies a journey, a guided path through parenthood. It's a name that reflects <br /> our dedication to enhancing early stages and guiding parents on their child-rearing journey.</h1>
        </div>
        <div className='lg:flex hidden justify-center items-center '>
                <div >
                    <Image src={man} alt="Family" />

                </div>


            </div>
       </div>

    </div>
  )
}

export default Why