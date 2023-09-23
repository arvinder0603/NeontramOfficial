import React from 'react'
import Link from 'next/link';
import {  AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare ,AiOutlineCopyrightCircle} from "react-icons/ai";
import Image from 'next/image';

import image from "../assets/image.png"

const Footer = () => {
  return (
    
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container  py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Head office</h2>
            <nav className="list-none mb-10">
            <p className='lg:text-[17px] text-[12px]'>
              #308, East wing, M. Visvesvaraya Block
              <br />
              TBIF IIT Ropar
              <br/>

              Rupnagar, Punjab, 140001
              <br />

              Email: contact@neontram.com
            </p>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Branch office</h2>
            <nav className="list-none mb-10">
            <p className='lg:text-[17px]  text-[12px]'>
             Regd. Office:
             <br />

             C/o 66, AT Balimundali, PO Badapokhari, VIA Tudigadia, Balasore,
             Orissa, India, 756047
           </p>
        
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex justify-center">
            <h2 className="title-font font-medium text-white flex justify-center tracking-widest text-2xl  text-center mb-3">Neontram</h2>
            <div className=' flex justify-center '>
            <Image className=' w-[200px]  h-max' src={image} alt='/'></Image>
           </div>
           

          </div>
        
        </div>

      
        <div className='flex justify-center lg:flex-row flex-col gap-10 text-center'>
        <div className='flex gap-1 justify-center mt-2 text-center'><h1></h1>Copyright <AiOutlineCopyrightCircle size={20}/> <h1>2023 Neontram</h1>
       
       </div>
       
       <h1 className='mt-2 text-center'>Powered by Neontram</h1>
       <div className='flex flex-col justify-center items-center gap-6 m-4'>
       <a  href="neontram\src\assets\NEONTRAM_9078825885_certificate_2023-09-21[912].pdf" className='text-[20px] bg-teal-100 text-black font-semibold  h-[60px] w-[200px] text-center rounded-xl' download>Legal Certificate </a>
       <a  href="neontram\src\assets\startup.pdf" className='text-[20px] bg-teal-100 text-black font-semibold  h-[60px] w-[200px] text-center rounded-xl' download>Startup India <br/> Certificate </a>

       </div>
     
        </div>
       
       
      </div>
     
  
       
      <div className='flex  justify-center'> 
      
        <div className='mb-6 lg:w-1/3 flex  justify-center   text-[30px] flex-col' >
         
          <ul className='flex justify-center  space-y-2'>
            <li>
              <Link href='https://www.linkedin.com/company/neontram/'>
                <h1 className='hover:text-white mt-2'>
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
        
      
      </div>

    

      
    </footer>
  )
}

export default Footer