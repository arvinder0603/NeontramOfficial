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

const page = () => {
  return (
     <>
    <div className=' bg-[url("https://img.freepik.com/free-photo/sunny-watercolor-texture-background_1083-167.jpg?1&w=1800&t=st=1695897428~exp=1695898028~hmac=2e097156decca99aa371c445943f8825b7683427684002b3d2bce63ab1f91fca")] bg-cover bg-no-repeat  w-[100vw] flex justify-center items-center flex-col ' >  
      <h1 className='m-4 lg:text-[70px] font-bold text-[40px] text-center mt-12 font-serif'>
        Anti-Pressure Ulcers Neontal Bed
      </h1>
      
       
       <div className="lex justify-center flex-col mt-[200px] ">
       <div className='grid lg:grid-cols-2 gap-8 grid-rows-2  justify-center'>

<Image alt='/' className=':h-[500px] w-[500px] rounded-3xl shadow-2xl hover:shadow-[#000330] duration-100 delay-100' src={bed1}></Image>


<Image alt='/' className=': w-[500px]  h-[464px] rounded-3xl shadow-2xl  hover:shadow-[#000330] delay-100'  src={bed2}></Image>


<Image  alt='/' className=':h-[500px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={Gal5}></Image>

<Image  alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={Gal5}></Image>
  
</div>




</div>




<h1 className='m-4 mt-[200px] font-extrabold lg:text-[70px] text-[35px] font-serif text-center' >Force Sensitive Resitors and PCB </h1>


<div className="lex justify-center flex-col mt-[200px] ">
      
      <div className='grid lg:grid-cols-2 gap-8 grid-rows-2  justify-center'>
    
    <Image alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] duration-100 delay-100' src={Gal1}></Image>
    
    
    <Image alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl  hover:shadow-[#000330] delay-100'  src={Gal2}></Image>
     
    <Image alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100'  src={Gal3}></Image>

<Image  alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={Gal4}></Image>
    
    
    
    </div>
    
    
    
    </div>
  <h1 className='m-45  mt-[200px] font-extrabold lg:text-[70px] text-[35px] font-serif text-center' >Neontal Formula Milk Dispenser</h1>
    
  <div className="lex justify-center flex-col mt-[200px] mb-24 ">
      
  <div className='grid lg:grid-cols-2 gap-8 grid-rows-2  justify-center'>

<Image alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] duration-100 delay-100' src={galc2}></Image>






<Image  alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={galc1}></Image>

<Image  alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={galc4}></Image>

<Image  alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={galc2}></Image>
  
</div>



</div>



    </div>

    <Footer/>
    </>
  
  )
}

export default page