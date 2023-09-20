
import Navi from '@/components/Navi';
import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player'

import { AiFillCheckSquare } from "react-icons/ai";

import { Front } from '@/components/Front';
import Why from '@/components/Why';
import Products from '@/components/Products';
import Review from '@/components/Review';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import r1 from "../../assets/r1.png"
import r2 from "../../assets/r2.png"

import Test from '@/components/Test';
import MapPage from '@/components/MapPage';
import Prev from '@/components/Prev';



const LandPage = () => {
  return (
    <div className=" bg-cover scroll-smooth flex justify-center bg-[#F9EBDC] " >
      <div className=''>


        <Navi />



        <Front />




        <div className='mb-[200px] mt-[200px]'>
          <h1 className='text-center lg:text-[68px] text-[43px] font-serif font-bold'>Our Products</h1>
          <Prev />

          <h1 className='text-center  text-[30px]'>🎉 Limited Time Offer: Enjoy a 20% Discount on products!</h1>

        </div>


        <div className='flex justify-center flex-col bg-[#DFCAB9] rounded-3xl'>


          <h1 className='lg:text-[60px] text-[40px]  flex justify-center'>
            Recognised By
          </h1>
          <div className='flex justify-center lg:flex-row flex-col gap-12 m-6'>
            <Image src={r1} alt='.' />
            <Image className='w-[450px]' src={r2} alt='.' />
          </div>

        </div>

        <Test />



   

        <Team />




        <MapPage />




        <Footer />



      </div>

    </div>
  );
};

export default LandPage;
