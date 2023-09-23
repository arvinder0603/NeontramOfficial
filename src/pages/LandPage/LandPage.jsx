
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
import Link from 'next/link';



const LandPage = () => {
  return (
    <div className=" bg-cover scroll-smooth flex justify-center bg-[#F9EBDC] " >
      <div className=''>


        <Navi />

  

        <Front />




        <div className='mb-[200px] mt-[200px]'>
          <h1 className='text-center lg:text-[68px] text-[43px] font-serif font-bold'>Our Products</h1>
          <div className='flex justify-center'>
          <Link className='text-[30px] shadow-2xl rounded-3xl w-[260px] text-center h-[50px]' href="/gallary">G A L L E R Y</Link>
          </div>
          <Prev />

          <h1 className='text-center  text-[30px]'>🎉 Limited Time Offer: Enjoy a 20% Discount on products!</h1>

        </div>


        <div className='flex justify-center flex-col bg-[#DFCAB9] rounded-3xl'>


          <h1 className='lg:text-[60px] text-[40px]  flex justify-center'>
            Recognised By
          </h1>
          <div className='flex justify-center lg:flex-row flex-col gap-12 m-6'>
            <a href='https://document-export.canva.com/A93Hk/DAFvR7A93Hk/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230922T154022Z&X-Amz-Expires=87940&X-Amz-Signature=f0c88a1b93bbd75d41a2ac395c786fbc927c5bfdd5ebd5f24e4617bca1e3d1f4&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2023%20Sep%202023%2016%3A06%3A02%20GMT'>
            <Image src={r1} alt='.' />

            </a>

            <a href='https://document-export.canva.com/pqQ1M/DAFvR_pqQ1M/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230922T215124Z&X-Amz-Expires=68094&X-Amz-Signature=6204e2f5e82200edf872065b0b17f3e05f255e069d6be2929958cd6f2273e30e&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2023%20Sep%202023%2016%3A46%3A18%20GMT'>

            <Image className='w-[450px]' src={r2} alt='.' />
            </a>
           
           
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
