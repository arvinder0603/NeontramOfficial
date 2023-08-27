"use client"
import React, { useEffect } from 'react'
import fam from "../assets/fam.png"
import { AiOutlineStar} from "react-icons/ai";
import Image from 'next/image';
import rev1 from "../assets/rev1.png"
import Card from '@/UI/Card';
import revdoc from "../assets/revdoc.jpg"
const Review = () => {
 

  return (
    <div className='flex flex-col     mt-[200px]  bg-slate-950  '>
      
      <div className='flex justify-center flex-col items-center mb-20'>
        <h1 className='lg:text-[50px] text-[33px] font-bold'>What people think about us</h1>
        <h1 className='lg:text-[35px] text-[20px] text-gray-500 text-center'>
            We're passionate about changing as many lives possible. And we know how difficult it can be sometimes to get started.<br/>
            Thats why we invented our products, that are available to everyone.
        </h1>
      </div>
        
        <div className='mt-10 flex justify-center gap-10  flex-col lg:flex-row'>

        <Card src={revdoc} name={"Doc Adarsha"} review=" Lorem ipsum, dolor sit amet consectetur ads,nd n jeherbjfbjjh whjfb jhewb fjhew sfjchb ejshc jsh cjhs cjsdz jhc dszjhc jhsd ipisicing elit. Expedita, id rem?"> </Card>
        <Card src={revdoc} name={"Doc Adarsha"} review=" Lorem ipsum, dolor sit amet consectetur ads,nd n jeherbjfbjjh whjfb jhewb fjhew sfjchb ejshc jsh cjhs cjsdz jhc dszjhc jhsd ipisicing elit. Expedita, id rem?"> </Card> 
      <Card src={revdoc} name={"Doc Adarsha"} review=" Lorem ipsum, dolor sit amet consectetur ads,nd n jeherbjfbjjh whjfb jhewb fjhew sfjchb ejshc jsh cjhs cjsdz jhc dszjhc jhsd ipisicing elit. Expedita, id rem?"> </Card>
      </div>
    </div>
  )
 
}

export default Review