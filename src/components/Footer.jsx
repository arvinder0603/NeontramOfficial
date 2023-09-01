import React from 'react'
import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import Image from 'next/image';

import image from "../assets/image.png"

const Footer = () => {
  return (
    <footer className='py-12 text-white bg-slate-900  mt-[100x]  flex justify-center flex-col   '>
      <div className='container flex justify-center  lg:gap-0 gap-4 mx-auto px-4 lg:mt-0 lg:flex  lg:justify-between'>
        <div className='flex justify-center flex-col items-center  mb-6 lg:w-1/3'>
          <h2 className='lg:text-[40px] font-extrabold mb-4 text-[#f83ce5] '>Neontram</h2>
          <p className='text-lg'>
            We care for your child.
          </p>


          <div className='flex justify-start items-center'>
            <Image className='h-[260px] w-[380px]' src={image} alt='/'></Image>
          </div>
        </div>


   

           <div className='flex'>

          

        {/* <div className='mb-6 lg:w-1/3 flex  flex-col' >
          <h2 className='lg:text-[30px] font-extrabold mb-4 text-[#f83ce5]'>Quick Links</h2> */}
          {/* <ul className='flex  flex-col justify-end space-y-2'>
            <li>
              <Link href='https://www.linkedin.com/company/neontram/'>
                <h1 className='hover:text-white'>
                  <AiFillLinkedin size={35} />
                </h1>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <h1 className='hover:text-white'><AiFillTwitterSquare size={35} /></h1>
              </Link>
            </li>
            <li>
              <Link href='https://www.facebook.com/Neontram?mibextid=ZbWKwL'>
                <h1 className='hover:text-white'><AiFillFacebook size={35} /></h1>
              </Link>
            </li>
            <li>
              <Link href='https://instagram.com/neontram_pvt_ltd?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'>
                <h1 className='hover:text-white'>
                  <AiFillInstagram size={35} />
                </h1>
              </Link>
            </li>
          </ul> */}
        {/* </div> */}
        <div className='lg:w-1/3 flex flex-row gap-6' >

          <div>
          <ul className='flex  flex-col justify-end space-y-2 mt-20'>
            <li>
              <Link href='https://www.linkedin.com/company/neontram/'>
                <h1 className='hover:text-white'>
                  <AiFillLinkedin size={45} />
                </h1>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <h1 className='hover:text-white'><AiFillTwitterSquare size={45} /></h1>
              </Link>
            </li>
            <li>
              <Link href='https://www.facebook.com/Neontram?mibextid=ZbWKwL'>
                <h1 className='hover:text-white'><AiFillFacebook size={45} /></h1>
              </Link>
            </li>
            <li>
              <Link href='https://instagram.com/neontram_pvt_ltd?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'>
                <h1 className='hover:text-white'>
                  <AiFillInstagram size={45} />
                </h1>
              </Link>
            </li>
          </ul>
          </div>
          <div>
          <h2 className='lg:text-xl text-[#f83ce5]  font-extrabold mb-4'>Contact Us</h2>
          <p className='lg:text-[17px] text-[12px]'>
            #308, East wing, M. Visvesvaraya Block
            <br />
            TBIF IIT Ropar
            <br/>

            Rupnagar, Punjab, 140001
            <br />

            Email: adarshanmallick@gmail.com
          </p>
          <p className='lg:text-[17px] text-[12px]'>
            Regd. Office:
            <br />

            C/o 66, AT Balimundali, PO Badapokhari, VIA Tudigadia, Balasore,
            Orissa, India, 756047
          </p>
          </div>
       
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer