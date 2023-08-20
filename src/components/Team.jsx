
import Image from 'next/image';
import React from 'react';
import fam from "../assets/fam.png"


const Team = () => {
 

  return (
    <div className='flex justify-center h-[100vh] mt-[320px]'>

 
    <div className=' flex flex-col lg:grid lg:grid-cols-3 gap-28 lg:grid-rows-2 gap-y-28 item-center'>
      <h1 className='text-[50px] font-extrabold'>Our team</h1>
      <div className='h-[200px] bg-slate-100  w-[300px] flex justify-center flex-col text-center shadow-2xl shadow-[#353B3C]'>
        <Image src={fam} alt='/'></Image>
        <h1 className='font-bold text-[30px] mt-4'>Director</h1>
      </div>
      <div className='h-[200px] bg-slate-100  w-[300px] flex justify-center flex-col text-center shadow-2xl shadow-[#353B3C]'>
        <Image src={fam} alt='/'></Image>
        <h1 className='font-bold text-[30px] mt-4'>CEO</h1>
      </div>
      <div className='h-[200px] bg-slate-100  w-[300px] flex justify-center flex-col text-center shadow-2xl shadow-[#353B3C]'>
        <Image src={fam} alt='/'></Image>
        <h1 className='font-bold text-[30px] mt-4'>Educator</h1>
      </div>
      <div className='h-[200px] bg-slate-100  w-[300px] flex justify-center flex-col text-center shadow-2xl shadow-[#353B3C]'>
        <Image src={fam} alt='/'></Image>
        <h1 className='font-bold text-[30px] mt-4'>Intern 1</h1>
      </div>
      <div className='h-[200px] bg-slate-100  w-[300px] flex justify-center flex-col text-center shadow-2xl shadow-[#353B3C]'>
        <Image src={fam} alt='/'></Image>
        <h1 className='font-bold text-[30px] mt-4'>Intern 2</h1>
      </div>
      
    </div>
    </div>
  );
};

export default Team;
