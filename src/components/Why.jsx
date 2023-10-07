// "use client"
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import Image from 'next/image';
// import React from 'react';
// import care from "../assets/care.jpg"
// import research from "../assets/research.png"
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import why2 from "../assets/why2.png"
// import why3 from "../assets/why3.png"
// import why4 from "../assets/why4.jpg"
// import why5 from "../assets/why5.png"

// const Why = () => {
 

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: false,
//     })  
//   }, []);

//   return (

//     <div className='bg-[url("https://img.freepik.com/free-vector/flat-stages-baby-boy-illustration_23-2148981563.jpg?w=1800&t=st=1693177938~exp=1693178538~hmac=3b7e3640d9069d595e2a2836f23ba2d539725f075166425d0ae936ddd094e650")] flex justify-center   ' >

   
//     <div
      
//       className='  mt-[160px]    flex  flex-col gap-12 lg:mb-0 m bg-contain'
//       // Set initia background color here if needed
//     >
//       <h4 className='flex justify-center font-extrabold font-sans lg:text-[70px] text-[33px] mb-14'>WHY NEONTRAM ?</h4>

//       <div className='grid  lg:grid-cols-3 lg:grid-rows-2 gap-32 ml-4 mb-8'>
//       <div data-aos="fade-up-right" className='flex justify-center content-center  bg-slate-100 lg:h-[300px] h-[200px] lg:w-[400px] w-[300px]    rounded-2xl shadow-2xl shadow-[#8186D9]'
//           >
//            <Image src={care} className='rounded-2xl' alt='/'></Image>
//           </div>
//           <div  data-aos="fade-up-left" className='flex justify-center  bg-slate-100 lg:h-[300px] h-[200px] lg:w-[400px] w-[300px]  rounded-2xl shadow-2xl shadow-[#8186D9]'
//           >
//             <Image src={research} className='rounded-2xl' alt='/'></Image>
//           </div>
//           <div data-aos="fade-up-left" className='flex justify-center  bg-slate-100 lg:h-[300px] h-[200px] lg:w-[400px] w-[300px]    rounded-2xl shadow-2xl shadow-[#8186D9]'
//           >
            
//             <Image src={why2} className='rounded-2xl' alt='/'></Image>
//           </div>
//           <div data-aos="fade-up-right" className='flex justify-center  bg-slate-100 lg:h-[300px] h-[200px] lg:w-[400px] w-[300px]   rounded-2xl shadow-2xl shadow-[#8186D9]'
//           >
//              <Image src={why3} className='rounded-2xl' alt='/'></Image>
//           </div>
//           <div data-aos="fade-up-left" className='flex justify-center  bg-slate-100 lg:h-[300px] h-[200px] lg:w-[400px] w-[300px]   rounded-2xl shadow-2xl shadow-[#8186D9]'
//           >
//              <Image src={why4} className='rounded-2xl' alt='/'></Image>
//           </div>
//           <div data-aos="fade-up-left" className='flex justify-center  bg-slate-100 lg:h-[300px] h-[200px] lg:w-[400px] w-[300px]   rounded-2xl shadow-2xl shadow-[#8186D9]'
//           >
//              <Image src={why5} className='rounded-2xl' alt='/'></Image>
//           </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Why;
