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
    <div className=" bg-cover bg-[linear-gradient( 58.2deg,  rgba(40,91,212,0.73) -3%, rgba(171,53,163,0.45) 49.3%, rgba(255,204,112,0.37) 97.7% );]  h-[100vh]" >
      <Navi/>

    

      <Front/>

      <Why/>

      <Products/>

      {/* <Review/> */}

    

      <Team/>

      <Footer/>

     
    </div>
  );
};

export default LandPage;
