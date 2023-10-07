import Image from 'next/image'
import React from 'react'
import bed1 from "../../assets/bed1.png"
import bed2 from "../../assets/bed2.jpg"
import Gal1 from "../../assets/Gal1.jpg"
import Gal2 from "../../assets/Gal2.jpg"
import Gal3 from "../../assets/Gal3.jpg"
import Gal4 from "../../assets/Gal4.jpg"
import Gal5 from "../../assets/Gal5.jpg"
import pr from "../../assets/pr2.png"
import pr2 from "../../assets/pr2.png"
import galc1 from "../../assets/galc1.jpg"
import galc2 from "../../assets/galc2.jpg"
import galc3 from "../../assets/galc3.png"
import galc4 from "../../assets/galc4.jpg"
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Neontram Galary',
  icons:{
     icon:"https://document-export.canva.com/_0MVI/DAFs8D_0MVI/7/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230907%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230907T070557Z&X-Amz-Expires=5377&X-Amz-Signature=70e8c9dbcbbb49f306f13248aaf34fc2f50ba15d70e6df79581dde405b743ebd&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2007%20Sep%202023%2008%3A35%3A34%20GMT"
  }
  
  
  
}

const page = () => {
  return (
    <>
      <div className=' bg-[#F9EBDC]  bg-cover bg-no-repeat   w-[100vw] flex justify-center items-center flex-col ' >
        <h1 className='m-4 lg:text-[70px] font-bold text-[40px] text-center mt-12 font-serif'>
          Anti-Pressure Ulcers Neonatal Bed
        </h1>


        <div className="lex justify-center flex-col mt-[200px] ">
          <div className='grid lg:grid-cols-2 gap-8 grid-rows-2  justify-center'>

            <div className='flex outline outline-2 rounded-xl object-cover'>
              <Image alt='/' className='h-[250px] w-[400px] rounded-3xl shadow-2xl hover:shadow-[#000330] duration-100 delay-100' src={bed1}></Image>

            </div>

            <div className='flex outline outline-2 rounded-xl'>
              <Image alt='/' className='h-[250px] w-[400px] rounded-3xl shadow-2xl hover:shadow-[#000330] duration-100 delay-100' src={bed2}></Image>

            </div>

            <div className='flex outline outline-2 rounded-xl'>
              <Image alt='/' className='h-[270px] w-[400px] rounded-3xl shadow-2xl hover:shadow-[#000330] duration-100 delay-100' src={Gal5}></Image>

            </div>

            <div className='flex outline outline-2 rounded-xl'>
              <Image alt='/' className='h-[270px] w-[400px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={Gal5}></Image>

            </div>

          </div>




        </div>




        <h1 className='m-4 mt-[200px] font-extrabold lg:text-[70px] text-[35px] font-serif text-center' >Force Sensitive Resitors and PCB </h1>


        <div className="lex justify-center flex-col mt-[200px] ">

          <div className='grid lg:grid-cols-2 gap-8 grid-rows-2  justify-center'>


            <div className='flex outline outline-2 rounded-xl'>
              <Image alt='/' className='h-[270px] w-[400px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={Gal1}></Image>

            </div>


            <div className='flex outline outline-2 rounded-xl'>
              <Image alt='/' className='h-[270px] w-[400px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={Gal2}></Image>

            </div>

            <div className='flex outline outline-2 rounded-xl'>
              <Image alt='/' className='h-[270px] w-[400px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={Gal3}></Image>

            </div>
            <div className='flex outline outline-2 rounded-xl'>
              <Image alt='/' className='h-[270px] w-[400px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={Gal4}></Image>

            </div>

          </div>



        </div>
        <h1 className='m-45  mt-[200px] font-extrabold lg:text-[70px] text-[35px] font-serif text-center' >Neontal Formula Milk Dispenser</h1>

        <div className="lex justify-center flex-col mt-[200px] mb-24 ">

          <div className='grid lg:grid-cols-2 gap-8 grid-rows-2  justify-center'>


            <div className='outline-3 outline rounded-xl'>

              <Image alt='/' className=':h-[300px] w-[400px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] duration-100 delay-100' src={galc2}></Image>


            </div>


            <div className='outline-3 outline rounded-xl'>

              <Image alt='/' className=':h-[300px] w-[400px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] duration-100 delay-100' src={galc1}></Image>


            </div>



            <div className='outline-3 outline rounded-xl'>

              <Image alt='/' className=':h-[300px] w-[400px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] duration-100 delay-100' src={galc4}></Image>


            </div>




            <div className='outline-3 outline rounded-xl'>

              <Image alt='/' className=':h-[300px] w-[400px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] duration-100 delay-100' src={galc2}></Image>


            </div>
          </div>



        </div>



      </div>

      <Footer />
    </>

  )
}

export default page