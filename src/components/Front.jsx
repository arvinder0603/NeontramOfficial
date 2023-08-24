import React from 'react';
import Image from 'next/image';
import doct from "../assets/doct.png"
import { AiFillCheckSquare } from "react-icons/ai";
import blood from '../assets/blood.png'
import sleep from '../assets/sleep.png'
import mood from '../assets/mood.png'

export const Front = () => {
  return (
    <div className='grid  h-[100vh] bg-[url("https://raw.githubusercontent.com/arvinder0603/NeontramOfficial/main/src/assets/Untitled%20design%20(1).png?token=GHSAT0AAAAAACD7TIVTG4IWG6TPNC6MNPBAZHFBIZA")]  lg:grid-cols-2 lg:mt-0  mt-8'>
    
    <div className='flex lg:hidden  justify-center items-center'>
       
    <Image className='' src={doct} alt="Family" />
    </div>
    
    <div className='flex justify-center flex-col gap-4 items-center text-[30px] text-center font-extrabold'>
      <div className='flex gap-20'>

        <Image className='h-[150px] w-[130px]' src={blood} alt='/'></Image>
        <Image  className='h-[150px] w-[130px]' src={sleep} alt='/'></Image>
      </div>
      <div className='flex justify-start '>
      <h1 className='text-[17px] text-gray-500 '>Health + Precaution </h1>
      </div>

      <div className='flex justify-center  p-5 ml-5'>
      <h1 className='lg:text-[40px] text-[20px] text-gray-600' ><span className='  text-[#4166f9] '>At Neontram </span>
        we create brighter begnnings for your little ones. As pioneers in newborn products, we design smart solutions that make parenting easier and enrich early life stages. Our excellence and passion shape a better future for the next generation.
       </h1>
      </div>
       
      <div className='opacity-70 lg:text-[17px]  text-[14px] grid grid-cols-2 gap-8 grid-rows-2'>
        <div className='flex  text-center items-center'>
        <AiFillCheckSquare className='text-[#4166f9]' size={30}/>
        <h1>Safety First</h1>

        </div>
        <div className='flex  text-center items-center'>
        <AiFillCheckSquare className='text-[#4166f9]' size={30}/>
        <h1>Comfort Redefined</h1>

        </div>
        <div className='flex  text-center items-center'>
        <AiFillCheckSquare className='text-[#4166f9]' size={30}/>
        <h1>Parent-Focused Solutions</h1>

        </div>

        <div className='flex  text-center items-center'>
        <AiFillCheckSquare className='text-[#4166f9]' size={30}/>
        <h1>Innovative Designs</h1>

        </div>


        </div>

        <div className='text-[20px] mt-12 flex'>
        <button className='bg-[#ff9900] text-white h-[50px] w-[120px] rounded-xl shadow-2xl'>Contact</button>
        <div className='flex justify-center m-3'>
        <h1 className='text-[16px] text-gray-500'>Book today</h1>
        </div>
       
        </div>
      
    </div>
    <div className='lg:flex hidden justify-center flex-col '>
    <div className='lg:flex hidden justify-center items-center'>
    <Image src={doct} alt="Family" />
    
    
    </div>
     <div className='flex justify-center gap-20'>

        <Image className='h-[150px] w-[130px]' src={blood} alt='/'></Image>
        <Image  className='h-[150px] w-[130px]' src={mood} alt='/'></Image>
      </div>

    </div>
   
    </div>
    
  )
}
