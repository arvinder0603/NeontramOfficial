"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import bed2 from "../assets/bed2.jpg"
import pr from "../assets/pr.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })  
  }, []);
  return (
    <div  className='flex lg:h-[1500px]  bg-[url("https://media.canva.com/1/image-resize/1/550_440_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9fdHRwYy9NQUZ0dnlfdHRwYy8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAAuTpTvWbv2HL3qLKRNF7bVaV3s-Qn47egwLv6BUYEs3&exp=1694086866&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAH9r4GPv433dGEGK5yAhkUGFTTcaDTNGTDycztMyUJPe")] lg: justify-center flex-col   text-center  mb-[100px] mt-[350px] lg:bg-no-repeat  bg-cover ' id="products">
      <div className='flex justify-center'>
      <h1 className='lg:text-[120px] text-[60px]  font-semibold drop-shadow-2xl mt-32  rounded-3xl '>
        Our Products
      </h1>
      </div>
     
        <div className='grid lg:grid-cols-2 gap-32 mt-[150px]'>

          <div data-aos="flip-left" className='flex justify-center shadow-2xl rounded-3xl flex-col '>
            <div className='flex justify-center'>
            <Image className='rounded-3xl' src={bed2} alt='/'></Image>
            </div>
           
            <div className='m-6'>
              <h1 className='text-[40px] font-bold'>Anti-Sore Neontal Bed</h1>
              <h1 className='text-[20px]'>
              Neonatal Anti-sore bed is designed for NICUs.<br/> The size of the bed is accurate to the currently deployed bed. The densely packed alternating pressure channels are uniquely designed for comfortable sleep. The material and adhesives used is biocompatible
              </h1>
            </div>
          </div>

          <div data-aos="flip-right" className='flex justify-center shadow-2xl rounded-3xl flex-col'>
            <div className='flex justify-center'>
            <Image className=' bg-slate-50 lg:h-[360px] w-[600px] rounded-3xl' src={pr} alt='/'></Image>
            </div>
           
            <div className='m-6'>
              <h1 className='text-[40px] font-bold'>Neonatal Formula Milk Dispenser</h1>
              <h1 className='text-[20px]'>
              The automatic formula milk dispenser represents a major step forward in the field of infant nutrition, offering parents an innovative, convenient, and efficient solution for preparing formula milk for their infants. With its advanced features and processes, this multi-tasking device is designed to save parents time and effort, while ensuring that their infants receive the best possible nutrition.
              </h1>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Products