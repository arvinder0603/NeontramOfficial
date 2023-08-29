"use client"
import React, { useEffect } from 'react'
import fam from "../assets/fam.png"
import { AiOutlineStar} from "react-icons/ai";
import Image from 'next/image';

import Card from '@/UI/Card';
import revdoc from "../assets/revdoc.jpg"
import { Revcard } from '@/UI/Revcard';
const Review = () => {
 

  return (
 <div className=' flex justify-center lg:h-[900px] h-[1800px] flex-col bg-[#F8D8B4] '>

  <h1 className='lg:text-[60px] text-[40px] mt-[100px] flex justify-center'>What People love  about our products</h1>
       <Revcard/>
       
 </div>
  )
 
}

export default Review