'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenuFold,AiOutlineMenuUnfold } from 'react-icons/ai';
import ReactWhatsapp from 'react-whatsapp';

const GallaryNavi = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    

  return (
    
    <div className='flex justify-between  '>
      <div className='flex justify-center  '>
        <h1 className='text-[30px] font-extrabold text-gray-700 m-6'>Neontram</h1>
      </div>

      <ul className='mt-10 text-[20px] text-gray-600 font-semibold cursor-pointer justify-center flex gap-8 tracking-wide'>
            <a className='outline outline-1 h-[40px] w-[70px] text-center rounded-lg lg:flex hidden shadow-2xl' href='/' target='_blank'>
                Home
              </a>
              
            </ul>

      <div className='lg:flex hidden justify-center m-5 '>
        <ReactWhatsapp
          className='b bg-gray-400 text-white h-[50px] w-[120px] rounded-xl shadow-2xl'
          number='+919078825885'
          message='Hello neontram!!'
        >
          Contact us
        </ReactWhatsapp>
      </div>

      {/* Hamburger menu for small screens */}
      <div className='lg:hidden flex justify-center items-center'>
        <div
          className='cursor-pointer m-6' 
          onClick={toggleMenu}
        >
          <AiOutlineMenuUnfold size={30} />
        </div>
        {showMenu && (
          
          <div className='absolute top-[80px] right-0 bg-[] p-4 w-full shadow'>
          <div className='flex justify-center'>

          <ul className='text-[12px] text-gray-600 font-semibold cursor-pointer flex gap-8 tracking-wide'>
            <a className='' href='/' target='_blank'>
                Home
              </a>
              
            </ul>
          </div>
          


        
          </div>
        )}
      </div>
    </div>
  )
}

export default GallaryNavi