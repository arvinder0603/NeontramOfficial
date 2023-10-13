"use client"
import Navi from '@/components/Navi';
import React, { useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player'

import { AiFillCheckSquare } from "react-icons/ai";

import { Front } from '@/components/Front';


import Review from '@/components/Review';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import r1 from "../../assets/r1.png"
import r2 from "../../assets/r2.png"

import Test from '@/components/Test';
import MapPage from '@/components/MapPage';
import Prev from '@/components/Prev';
import Link from 'next/link';
import ReactWhatsapp from 'react-whatsapp';



const LandPage = () => {
  const [number, setNumber] = useState(''); // Initialize state with an empty string

  const handler = (event) => {
   
    setNumber(event.target.value);
   
    
  }

  const SubmitHandler=(e)=>{
    e.preventDefault();
    console.log(number); 
  }

  return (
    <div className=" bg-[#BEC2C5]  bg-cover scroll-smooth flex justify-center  " >
      <div className=''>






        <Front />




        <div className='mb-[200px] mt-[200px]'>
          <h1 className='text-center lg:text-[68px] text-[43px] font-serif font-bold'>Our Products</h1>
          <div className='flex justify-center'>
            <a
              className='text-[30px] shadow-2xl outline rounded-lg w-[260px] text-center h-[50px]'
              href="/gallary"
              target="_blank"
            >
              G A L L E R Y
            </a>
          </div>

          <div className='flex justify-center flex-col'>
            <h1 className='text-center mt-6 font-bold lg:text-[40px]  text-[20px] font-mono'>Buy our product at Amazon!!!</h1>

            <div className='flex justify-center mt-4'>
              <button className='text-[20px] outline outline-3 rounded-lg w-[100px] shadow-2xl shadow-black '>

                <a target='_blank' href='https://www.amazon.in/dp/B0CCD6MQ4P?ref_=cm_sw_r_mwn_dp_H2DJHCHBMNZ8PNJ7J7ZK'>  Buy here</a>
              </button>
            </div>


          </div>
          <Prev />

          <h1 className='text-center  text-[30px]'>🎉 Limited Time Offer: Enjoy a 20% Discount on products!</h1>

        </div>


        <div className='flex justify-center flex-col bg-[#9EA4A9] rounded-3xl'>


          <h1 className='lg:text-[60px] text-[40px]  flex justify-center'>
            Recognised By
          </h1>
          <div className='flex justify-center lg:flex-row flex-col gap-12 m-6'>
            <a href='https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/startup.pdf.png'
            >
              <Image src={r1} className='w-[450px] hover:w-[490px]' alt='.' />

            </a>

            <a href='https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/download.png'>

              <Image className='w-[450px] hover:w-[490px]' src={r2} alt='.' />
            </a>


          </div>

        </div>



        <Test />







        <Team />






        <div className='grid lg:grid-cols-2 m-12'>
          <h1 className='text-[25px] lg:text-[30px] font-bold flex justify-end'>
            Leave Contact Number we will call back you ......
          </h1>

          <div className='flex flex-col justify-start items-center'>


{/* 
            <input className='h-[40px]  outline-2 outline w-[230px] rounded-xl shadow-2xl'
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            /> */}

            <form onSubmit={SubmitHandler} >
    <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
        <input 
            className="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100" 
            type="tel" 
            name="phone" 
            id="phone" 
            placeholder="Enter your phone number" 
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
            required 
            onChange={handler}
        />
        <button 
            className="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600" 
               type='submit' 
        >
            Submit
        </button>
    </div>
</form>

          </div>

        </div>



        <MapPage />





        <Footer />



      </div>

    </div>
  );
};

export default LandPage;
