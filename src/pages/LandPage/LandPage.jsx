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
import Coursel from '@/UI/Coursel';

const LandPage = () => {
  return (
    <div className=" bg-cover scroll-smooth flex justify-center bg-red-900 " >
      <div className='flex justify-center flex-col'>


      <Navi/>

    

      <Front/>

      <Why/>

      <Products/>

      <Review/>

    

      <Team/>

      <Footer/>
      </div>
     
    </div>
  );
};

export default LandPage;
