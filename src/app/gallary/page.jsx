import Image from 'next/image'
import React from 'react'
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

const page = () => {
  return (
    
    <div className=' bg-[url("https://img.freepik.com/free-vector/gray-abstract-wireframe-background_53876-99911.jpg?w=1060&t=st=1695479463~exp=1695480063~hmac=2dadad04d63e29ae89e9c323cd9f130da10abb83948f089f18a4caf1a7b383ae")] bg-cover bg-no-repeat  w-[100vw] flex justify-center items-center flex-col ' >  
      <h1 className='lg:text-[70px] font-bold text-[40px] text-center'>
        Anti-Pressure Neontal Bed
      </h1>
      
       
       <div className="lex justify-center flex-col mt-[200px] ">
       <div className='grid lg:grid-cols-3 gap-8 grid-rows-2  justify-center'>

<Image alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] duration-100 delay-100' src={Gal1}></Image>


<Image alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl  hover:shadow-[#000330] delay-100'  src={Gal2}></Image>

<Image alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100'  src={Gal3}></Image>

<Image  alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={Gal4}></Image>

<Image  alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={Gal5}></Image>

<Image  alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={Gal5}></Image>
  
</div>




</div>
  <h1 className='mt-[200px] font-extrabold lg:text-[70px] text-[35px]' >Neontal Formula Milk Dispenser</h1>
    
  <div className="lex justify-center flex-col mt-[200px] ">
      
  <div className='grid lg:grid-cols-3 gap-8 grid-rows-2  justify-center'>

<Image alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] duration-100 delay-100' src={galc2}></Image>


<Image alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl  hover:shadow-[#000330] delay-100'  src={galc3}></Image>

<Image alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100'  src={galc4}></Image>

<Image  alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={galc1}></Image>

<Image  alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={galc4}></Image>

<Image  alt='/' className=':h-[400px] w-[500px] rounded-3xl h-[300px]rounded-3xl shadow-2xl hover:shadow-[#000330] delay-100' src={galc2}></Image>
  
</div>



</div>

    </div>
  
  )
}

export default page