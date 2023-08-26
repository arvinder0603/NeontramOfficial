
import Image from 'next/image';
import React from 'react';
import fam from "../assets/fam.png"
import adarsha from "../assets/adarsha.png"
import bijit from "../assets/bijit.png"
import doctor from "../assets/doctor.png"

const Team = () => {
 

  return (
    <div className='flex justify-center  bg-[url("https://raw.githubusercontent.com/arvinder0603/NeontramOfficial/main/src/assets/bg.jpg?token=GHSAT0AAAAAACD7TIVTMS7KEHZ3WQIZ7TGIZHKILNQ")] bg-cover mt-[300px] mb-[300px] '>

 
    <div className=' flex flex-col lg:grid lg:grid-cols-3 mt-52 gap-28 lg:grid-rows-2 gap-y-28 item-center'>
      <h1 className='lg:text-[70px] text-[50px] font-serif font-extrabold underline underline-offset-4 text-center' >OUR TEAM</h1>
      <div data-aos="zoom-in-down" className='rounded-3xl bg-slate-100  w-[300px] flex justify-center flex-col text-center shadow-2xl shadow-[#353B3C]'>
        <Image className='rounded-3xl' src={adarsha} alt='/'></Image>
        <h1 className='font-semibold text-[22px] m-4'>
          Adarsha <br/>CO-FOUNDER, CEO. 
         <br/>
Ph. D. IIT Ropar</h1>
      </div>
      <div data-aos="zoom-in-down" className='rounded-3xl bg-slate-100  w-[300px] flex justify-center flex-col text-center shadow-2xl shadow-[#353B3C]'>
        <Image className='rounded-3xl' src={bijit} alt='/'></Image>
        <h1 className='font-semibold text-[22px] m-4'>
          Bijit <br/>CO-FOUNDER, CTO. 
         <br/>
Ph. D. IIT Ropar</h1>
      </div>
      <div data-aos="zoom-in-up" className='rounded-3xl bg-slate-100  w-[300px] flex justify-center flex-col text-center shadow-2xl shadow-[#353B3C]'>
        <Image className='rounded-3xl' src={doctor} alt='/'></Image>
        <h1 className='font-semibold text-[22px] m-4'>
          Dr Ashish K Sahni<br/>ASSISTANT PREOF 
         <br/>
Ph. D. IIT Ropar</h1>
      </div>
      <div data-aos="zoom-in-up" className='rounded-3xl bg-slate-100  w-[300px] flex justify-center flex-col text-center shadow-2xl shadow-[#353B3C]'>
        <Image className='rounded-3xl' src={fam} alt='/'></Image>
        <h1 className='font-bold text-[30px] mt-4'>Intern 1</h1>
      </div>
      <div data-aos="zoom-in-up" className='rounded-3xl bg-slate-100  w-[300px] flex justify-center flex-col text-center shadow-2xl shadow-[#353B3C]'>
        <Image className='rounded-3xl' src={fam} alt='/'></Image>
        <h1 className='font-bold text-[30px] mt-4'>Intern 2</h1>
      </div>
      
    </div>
    </div>
  );
};

export default Team;
