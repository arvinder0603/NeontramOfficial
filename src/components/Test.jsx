import React from 'react'
import pr from "../assets/pr.png"
import Image from 'next/image'
import bed2 from "../assets/bed2.jpg"
import bedrev from "../assets/bedrev.jpg"
import bedchild from "../assets/bedchild.png"
import revdoc from "../assets/revdoc.jpg"
import pr2 from "../assets/pr2.jpg"
import bed3 from "../assets/bed3.jpg"
import birac from '../assets/birac.png'
import firr from '../assets/firr.png'
const Test = () => {
  return (
    <section className="text-gray-600 body-font" >
      <div className="container px-5 py-24 mx-auto  flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="lg:text-[60px] text-[38px] font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Neontram
          </h1>
          <p className="lg:pl-6 lg:text-[27px] text-[23px] lg:w-2/3 mx-auto leading-relaxed text-base">
            Neontram Pvt. Ltd. is a BIRAC-funded company for developing technology-driven solutions for neonatal and pediatric healthcare.
            The primary objective of the company is to develop a low-cost anti-sore bed for neonates in addition to the development and commercialization of other medical devices, especially in the fields of pediatrics and neonatology spaces.
            We will also develop and provide software and electronics solutions for healthcare applications and provide consulting and training services in the above areas. We will also develop products for the preparation of beverages for neonatology, pediatrics, and adult-use cases.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image alt="gallery" className=" shadow-2xl rounded-xl w-full h-full object-cover object-center block" src={bedrev} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" className=" shadow-2xl rounded-xl w-full h-full object-center block" src={bed2} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" className=" shadow-2xl rounded-xl w-full  h-full object-center block" src={bed3} />
            </div>

          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image alt="gallery" className=" shadow-2xl rounded-xl w-full h-full object-cover object-center block" src={revdoc} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" className=" shadow-2xl rounded-xl w-full object-cover h-full object-center block" src={pr} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" className=" shadow-2xl rounded-xl w-full object-cover h-full object-center block" src={pr2} />
            </div>
          </div>
        </div>
        <h1 className='mt-8 font-extrabold flex justify-center lg:text-[42px] text-[23px]'>Implementation of our product at Neonatal intensive care unit of Dayanand Medical College & Hospital ,  Ludhiana</h1>
      </div>

      

      <div className='flex justify-center mb-16' >

      <iframe  className='lg:h-[400px] lg:w-[700px] h-[300px] w-full'  src="https://www.youtube.com/embed/JH06b85mtqo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className='flex justify-center m-6 '>
        <h1 className='lg:text-[60px] text-[33px] flex items-center'>Supported  by</h1>
        <div className='flex  justify-center lg:flex-row flex-col'>
          <Image src={birac} alt='/'></Image>
          <div className='flex justify-center align-middle items-center'>
            <Image className='lg:h-[160px] h-[100px] w-[120px] lg:w-[200px]' src={firr} alt='/'></Image>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Test