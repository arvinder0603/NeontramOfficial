
import Navi from '@/components/Navi';
import React from 'react';
import Image from 'next/image';

import { AiFillCheckSquare } from "react-icons/ai";

import { Front } from '@/components/Front';
import Why from '@/components/Why';
import Products from '@/components/Products';
import Review from '@/components/Review';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import r1 from "../../assets/r1.png"
import r2 from "../../assets/r2.png"
import Contact from '@/components/Contact';
import Test from '@/components/Test';




const LandPage = () => {
  return (
    <div className=" bg-cover scroll-smooth flex justify-center bg-[#F9EBDC] " >
      <div className=''>


        <Navi />



        <Front />





        <Products />

        <div className='flex justify-center flex-col bg-[#DFCAB9] rounded-3xl'>


          <h1 className='lg:text-[60px] text-[40px]  flex justify-center'>
            Recognised By
          </h1>
          <div className='flex justify-center lg:flex-row flex-col m-6'>
            <Image src={r1} alt='.' />
            <Image src={r2} alt='.' />
          </div>

        </div>

        <Test/>

        <Team />

        <Contact />

        <Footer />



      </div>

    </div>
  );
};

export default LandPage;
