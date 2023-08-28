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
 <div className='lg:h-[100vh] flex justify-center flex-col  bg-gradient-to-t from-[#cfd9df] to-[#e2ebf0]'>

  <h1 className='text-[60px] flex justify-center'>What People love  about our products</h1>
       <Revcard/>
       
 </div>
  )
 
}

export default Review