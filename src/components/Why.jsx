import React from 'react'
import Image from 'next/image';
import man from "../assets/man.png"
import { IconName } from "react-icons/fc";
const Why = () => {
    return (
        <div className='grid lg:grid-cols-2 h-[100vh] bg-slate-50 mt-36 '>

            <div className='lg:hidden flex'>
                <Image src={man} alt="Family" />

            </div>

            <div className='flex flex-col  items-center m-5'>
                <h1 className='lg:text-[70px] text-[40px] font-extrabold  text-[#4166f9] '>Why Neontram?</h1>

                <h1 className='mt-12 lg:text-[26px] text-[18px]  text-gray-500 mb-6'>NeonTram captures the essence of innovation and growth for newborns.<br /> "Neon" suggests a radiant, vibrant start, symbolizing new life, while "Tram" <br />signifies a journey, a guided path through parenthood. It's a name that reflects <br /> our dedication to enhancing early stages and guiding parents on their child-rearing journey.</h1>

                <h1 className='mt-12 lg:text-[26px] text-[18px] text-gray-500 mb-6'> Drawing inspiration from inventors Adarsha Narayan Malik, Bijit Basumatary, and Dr. Ashish Kumar Sahni, NeonTram lights the way in newborn innovation, simplifying parenthood's journey with thoughtful and practical solutions.</h1>

                <div className='flex gap-8 '>
                    {/* <div className='bg-[#de9321] h-[50px] w-[100px] rounded-xl shadow-2xl  flex justify-center items-center'>
                        <h1>Precautions</h1>
                    </div>

                    <div className='bg-[#de9321] h-[50px] w-[100px] rounded-xl shadow-2xl  flex justify-center items-center'>
                        <h1>Maintained</h1>
                    </div>

                    <div className='bg-[#de9321] h-[50px] w-[100px] rounded-xl shadow-2xl  flex justify-center items-center'>
                        <h1>Washable</h1>
                    </div> */}

                    
                    
                </div>
            </div>

            <div className='lg:flex hidden justify-center'>
                <div >
                    <Image src={man} alt="Family" />

                </div>


            </div>


        </div>
    )
}

export default Why