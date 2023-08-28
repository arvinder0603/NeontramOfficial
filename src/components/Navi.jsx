"use client"
import React from 'react'
import { Link } from 'react-scroll';

import ReactWhatsapp from 'react-whatsapp';


const Navi = () => {
  return (
    <div  className='flex justify-between border-b-2 h-[80px]  bg-[#F9EBDC]'>
      
      
      <div className='flex justify-center m-5'>

        <h1 className='text-[30px] font-extrabold text-[#ff9900]'>Neontram</h1>

      </div>

      <div className='lg:flex hidden justify-center items-center'>
       <ul className='text-[13px] text-gray-600 font-semibold flex gap-12 tracking-wide'>
        
       <li className="focus:border-b-4 border-[#4166f9] ">H O M E</li>

        <Link to="products" smooth={true} duration={500}  >P R O D U C T S</Link>
        <Link to="team" smooth={true} duration={500}  >T E A M</Link>
       </ul>
      </div>

      <div className='flex justify-center m-4 '>
      <ReactWhatsapp className='bg-[#ff9900] text-white h-[50px] w-[120px] rounded-xl shadow-2xl' number="+919078825885" message="Hello neontram!!"  > Contact us</ReactWhatsapp>
       
      </div>
       
    </div>
  )
}

export default Navi