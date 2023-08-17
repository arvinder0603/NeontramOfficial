import Navi from '@/components/Navi';
import React from 'react';
import Image from 'next/image';
import doct from "../LandPage/../../assets/doct.jpg"
import { AiFillCheckSquare } from "react-icons/ai";

import { Front } from '@/components/Front';
import Why from '@/components/Why';
import Products from '@/components/Products';
import Review from '@/components/Review';
import Team from '@/components/Team';

const LandPage = () => {
  return (
    <div className=" bg-cover bg-centerc bg-slate-50 h-[100vh]" >
      <Navi/>

      <Front/>

      <Why/>

      <Products/>

      <Review/>

      <Team/>

     
    </div>
  );
};

export default LandPage;
