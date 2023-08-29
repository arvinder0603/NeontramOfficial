"use client"
import React, { useEffect } from 'react'
import fam from "../assets/fam.png"
import { AiOutlineStar} from "react-icons/ai";
import Image from 'next/image';
import r1 from "../assets/r1.png"
import r2 from "../assets/r2.png"
import Card from '@/UI/Card';
import revdoc from "../assets/revdoc.jpg"
import { Revcard } from '@/UI/Revcard';
const Review = () => {
 

  return (
  
      
 <div className=' flex justify-center mt-[100px] lg:h-[900px] h-[1800px] flex-col bg-[#F8D8B4] '>
 <div className='flex justify-center flex-col bg-orange-400 rounded-3xl'>


 <h1 className='lg:text-[60px] text-[40px] flex justify-center'>
   Recognised By
 </h1>
 <div className='flex justify-center lg:flex-row flex-col m-6'>
  <Image src={r1} alt='.'/>
  <Image src={r2} alt='.'/>
 </div>

 </div>
 
  <h1 className='lg:text-[60px] text-[40px] mt-[100px] flex justify-center'>What People love  about our products</h1>
       <Revcard/>
       
 </div>
 
  )
 
}

export default Review