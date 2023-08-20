import React from 'react'
import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";
import Image from 'next/image';
import neo from "../assets/neo.jpg"

const Footer = () => {
  return (
    <footer className='  py-12 mt-[200px] bg-black text-white'>
    <div className='container mx-auto px-4 lg:flex lg:justify-between'>
      <div className='flex justify-center flex-col items-center  mb-6 lg:w-1/3'>
        <h2 className='text-3xl font-extrabold mb-4 '>Neontram</h2>
        <p className='text-lg'>
          We care for your child.
        </p>
        {/* <div className='flex justify-center items-center'>
          <Image  src={neo} alt='/'></Image>
        </div> */}
      </div>
      <div className='mb-6 lg:w-1/3 flex  flex-col item-center' >
        <h2 className='text-3xl font-extrabold mb-4'>Quick Links</h2>
        <ul className='space-y-2'>
          <li>
            <Link href='/'>
              <h1 className='hover:text-white'>
                <AiFillLinkedin size={50}/>
              </h1>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <h1 className='hover:text-white'><AiFillTwitterSquare size={50}/></h1>
            </Link>
          </li>
          <li>
            <Link href='/services'>
              <h1 className='hover:text-white'><AiFillFacebook size={50}/></h1>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <h1 className='hover:text-white'>
                <AiFillInstagram size={50}/>
              </h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className='lg:w-1/3'>
        <h2 className='text-3xl  font-extrabold mb-4'>Contact Us</h2>
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