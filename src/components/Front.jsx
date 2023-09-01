"use client"
import React from 'react';
import Image from 'next/image';
import doct from "../assets/doct.png"
import { AiFillCheckSquare } from "react-icons/ai";
import Blood from '../assets/Blood.png'
import Sleep from '../assets/Sleep.png'
import child2 from "../assets/child2.png"
import kid from "../assets/kid.png"
import ReactWhatsapp from 'react-whatsapp';
export const Front = () => {
  return (
    <div className='flex lg:h-[1300px]  justify-center   bg-[#F9EBDC]'>

 
    <div className='grid  lg:grid-cols-2 lg:mt-0  mt-4 '>
    
    <div className='flex lg:hidden  justify-center items-center'>
       
    <Image className='' src={kid} alt="Family" />
    </div>
    
    <div className='flex justify-center flex-col gap-4 items-center text-[30px] text-center font-extrabold'>
      <div className='lg:flex  hidden gap-20 '>

        <Image className='h-[400px] w-[500px]' src={child2} alt='/'></Image>
     
      </div>
      <div className='flex justify-start '>
      <h1 className='text-[17px] text-gracdy-500 '>Health + Precaution </h1>
      </div>

      <div className='flex justify-center  p-5 ml-5'>
      <h1 className='lg:text-[40px] text-[20px] text-gray-600' ><span className='  text-[#ff9900] '>At Neontram </span>
        we create brighter begnnings for your little ones. As pioneers in newborn products, we design smart solutions that make parenting easier and enrich early life stages. Our excellence and passion shape a better future for the next generation.
       </h1>
      </div>
       
      <div className='opacity-70 lg:text-[17px] m-6  text-[14px] grid grid-cols-2 gap-8 grid-rows-2'>
        <div className='flex  text-center items-center'>
        <AiFillCheckSquare className='text-[#4166f9]' size={30}/>
        <h1>Safety First</h1>

        </div>
        <div className='flex  text-center items-center'>
        <AiFillCheckSquare className='text-[#4166f9]' size={30}/>
        <h1>Comfort Redefined</h1>

        </div>
        <div className='flex  text-center items-center'>
        <AiFillCheckSquare className='text-[#4166f9]' size={30}/>
        <h1>Parent-Focused Solutions</h1>

        </div>

        <div className='flex  text-center items-center'>
        <AiFillCheckSquare className='text-[#4166f9]' size={30}/>
        <h1>Innovative Designs</h1>

        </div>


        </div>

        <div className='text-[20px] mt-12 flex'>
        <ReactWhatsapp className='bg-[#ff9900] text-white h-[50px] w-[120px] rounded-xl shadow-2xl' number="+919078825885" message="Hello neontram!!"  > Contact us</ReactWhatsapp>
        <div className='flex justify-center m-3'>
        <h1 className='text-[16px] text-gray-500'>Book today</h1>
        </div>
       
        </div>
      
    </div>
    <div className='flex  lg:hidden gap-20 '>

<Image className='h-[400px] w-[500px]' src={child2} alt='/'></Image>

</div>
    <div className='lg:flex hidden justify-center flex-col '>
    <div className='lg:flex hidden justify-center items-center'>
    <Image src={kid} alt="Family" />
    
    
    </div>
    
     

    </div>
   
    </div>
    </div>
    
  )
}
