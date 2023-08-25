
import React from 'react'
import fam from "../assets/fam.png"
import { AiOutlineStar} from "react-icons/ai";
import Image from 'next/image';
const Review = () => {
  return (
    <div className='grid grid-rows-2 '>
      
      <div className='flex justify-center flex-col items-center'>
        <h1 className='lg:text-[50px] text-[27px] font-bold'>What people think about us</h1>
        <h1 className='lg:text-[35px] text-[16px] text-gray-500 text-center'>
            We're passionate about changing as many lives possible. And we know how difficult it can be sometimes to get started.<br/>
            Thats why we invented our products, that are available to everyone.
        </h1>
      </div>

      <div className='grid lg:grid-cols-3 gap-y-8 gap-16' >
       
       <div className='flex flex-col justify-center shadow-2xl rounded-xl'>
        <div className='flex flex-col justify-center text-center'> 
        <div className='flex justify-center'>
        <Image className='flex rounded-[800px] h-[200px] w-[200px]' src={fam} alt=''/>
        </div>
        
         <h1 className=' font-semibold text-gray-500'>Name</h1>
         <h1>Designation</h1>
        </div>
        <div className=' justify-center'> 
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, natus perspiciatis?</h1>
        </div>
       
       </div>

       <div className='flex flex-col justify-center shadow-2xl rounded-xl'>
        <div className='flex flex-col justify-center text-center'> 
        <div className='flex justify-center'>
        <Image className='flex rounded-[800px] h-[200px] w-[200px]' src={fam} alt=''/>
        </div>
        
         <h1 className='font-semibold text-gray-500'>Name</h1>
         <h1>Designation</h1>
        </div>
        <div className='flex justify-center'> 
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, natus perspiciatis?</h1>
        </div>
       
       </div>

       <div className='flex flex-col justify-center shadow-2xl rounded-xl'>
        <div className='flex flex-col justify-center text-center'> 
        <div className='flex justify-center'>
        <Image className='flex rounded-[800px] h-[200px] w-[200px]' src={fam} alt=''/>
        </div>
        
         <h1 className='font-semibold text-gray-500'>Name</h1>
         <h1>Designation</h1>
        </div>
        <div className='flex justify-center'> 
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, natus perspiciatis?</h1>
        </div>
       
       </div>
    


      </div>

    </div>
  )
}

export default Review