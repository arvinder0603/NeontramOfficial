import React from 'react'
import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";
import Image from 'next/image';
import neo from "../assets/neo.jpg"
import image from "../assets/image.png"

const Footer = () => {
  return (
    <footer className='py-12 text-white  bg-slate-900 mt-[100x] flex justify-center flex-col   '>
    <div className='container flex justify-center  lg:gap-0 gap-16 mx-auto px-4 lg:mt-0 lg:flex  lg:justify-between'>
      <div className='flex justify-center flex-col items-center  mb-6 lg:w-1/3'>
        <h2 className='lg:text-[40px] font-extrabold mb-4 text-[#f83ce5] '>Neontram</h2>
        <p className='text-lg'>
          We care for your child.
        </p>
        <div className='flex justify-start items-center'>
          <Image  className='h-[200px] w-[200px]' src={image} alt='/'></Image>
        </div>
      </div>
      <div className='mb-6 lg:w-1/3 flex  flex-col item-center' >
        <h2 className='lg:text-[30px] font-extrabold mb-4 text-[#f83ce5]'>Quick Links</h2>
        <ul className='space-y-2'>
          <li>
            <Link href='/'>
              <h1 className='hover:text-white'>
                <AiFillLinkedin size={35}/>
              </h1>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <h1 className='hover:text-white'><AiFillTwitterSquare size={35}/></h1>
            </Link>
          </li>
          <li>
            <Link href='/services'>
              <h1 className='hover:text-white'><AiFillFacebook size={35}/></h1>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <h1 className='hover:text-white'>
                <AiFillInstagram size={35}/>
              </h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className='lg:w-1/3'>
        <h2 className='lg:text-3xl text-[#f83ce5]  font-extrabold mb-4'>Contact Us</h2>
        <p className='text-sm'>
          123 Main Street
          <br />
          City, Country
          <br />
          Phone: (123) 456-7890
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer