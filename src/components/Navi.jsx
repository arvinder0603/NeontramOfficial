"use client"
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineShoppingCart,AiOutlineMenuUnfold } from 'react-icons/ai';
import ReactWhatsapp from 'react-whatsapp';

const Navi = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex justify-between border-b-2 h-[80px] bg-[#F9EBDC]'>
      <div className='flex justify-center m-5'>
        <h1 className='text-[30px] font-extrabold text-[#ff9900]'>Neontram</h1>
      </div>

      <div className='lg:flex hidden justify-center items-center'>
        <ul className='text-[13px] text-gray-600 font-semibold cursor-pointer flex gap-12 tracking-wide'>
          <li className='focus:border-b-4 border-[#4166f9]'>H O M E</li>
          <Link to='products' smooth={true} duration={500}>
            P R O D U C T S
          </Link>
          <Link to='team' smooth={true} duration={500}>
            T E A M
          </Link>
          <Link to='contacts' smooth={true} duration={500}>
            C A R E E R
          </Link>
          <a className='' href='/gallary' target='_blank'>
            G A L L E R Y
          </a>
        </ul>
      </div>

      <div className='lg:flex hidden justify-center m-5 '>
        <ReactWhatsapp
          className='bg-[#ff9900] text-white h-[50px] w-[120px] rounded-xl shadow-2xl'
          number='+919078825885'
          message='Hello neontram!!'
        >
          Contact us
        </ReactWhatsapp>
      </div>

      {/* Hamburger menu for small screens */}
      <div className='lg:hidden flex justify-center items-center'>
        <div
          className='cursor-pointer'
          onClick={toggleMenu}
        >
          <AiOutlineMenuUnfold size={30} />
        </div>
        {showMenu && (
          <div className='absolute top-[80px] right-0 bg-[#F9EBDC] p-4 shadow'>
            <ul className='text-[13px] text-gray-600 font-semibold cursor-pointer flex gap-12 tracking-wide'>
              <li className='focus:border-b-4 text-[15px] border-[#4166f9]'>Home</li>
              <Link to='products' className='text-[15px]' smooth={true} duration={500}>
               Products
              </Link>
              <Link to='team' smooth={true} duration={500}>
               Team
              </Link>
              <Link to='contacts' smooth={true} duration={500}>
                Career
              </Link>
              <a className='' href='/gallary' target='_blank'>
                Gallery
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navi;
