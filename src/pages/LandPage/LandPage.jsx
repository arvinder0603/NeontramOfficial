"use client"
import Navi from '@/components/Navi';
import React from 'react';
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
  return (
    <div className=" bg-cover scroll-smooth flex justify-center bg-[#F9EBDC] " >
      <div className=''>


        <Navi />



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

          <div  className='flex justify-center flex-col'>
        <h1 className='text-center mt-6 font-bold lg:text-[40px]  text-[20px] font-mono'>Buy our product at Amazon!!!</h1>
           
           <div className='flex justify-center mt-4'>
           <button className='text-[20px] outline outline-3 rounded-lg w-[100px] shadow-2xl shadow-black '>
           
             <a  target='_blank' href='https://www.amazon.in/dp/B0CCD6MQ4P?ref_=cm_sw_r_mwn_dp_H2DJHCHBMNZ8PNJ7J7ZK'>  Buy here</a>
          </button>
           </div>
          
          
       </div>
          <Prev />

          <h1 className='text-center  text-[30px]'>🎉 Limited Time Offer: Enjoy a 20% Discount on products!</h1>

        </div>


        <div className='flex justify-center flex-col bg-[#DFCAB9] rounded-3xl'>


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



        <div id="contacts" className='text-center lg:text-[20px]  font-semibold mb-12'>
          <h1 className='mb-8'>
            <span className='lg:text-[35px] font-extrabold text-[24px]' >🌟 Exciting Opportunities Await! 🌟</span>
          </h1>

          <div className='mb-6'>
            <span className='lg:text-[26px] text-[22px] font-semibold'>👩‍⚕️ Nursing Staff Wanted 👨‍⚕️</span>
            <p className='mt-2'>
              Are you a compassionate and skilled nurse looking to make a difference? Join our team and be a part of providing top-notch care to those in need.
            </p>
          </div>

          <div className='mb-6'>
            <span className='lg:text-[26px] text-[22px] font-semibold'>🛠️ Embedded Engineer Wanted 🖥️</span>
            <p className='mt-2'>
              Do you have a passion for technology and a knack for embedded systems? Join us in revolutionizing the digital world with innovative solutions.
            </p>
          </div>

          <ReactWhatsapp className='bg-[#ff9900] text-white h-[50px] w-[120px] rounded-xl shadow-2xl' number="+919078825885" message="Hello neontram!!"  > Contact us</ReactWhatsapp>



        </div>



        <MapPage />




        <Footer />



      </div>

    </div>
  );
};

export default LandPage;
