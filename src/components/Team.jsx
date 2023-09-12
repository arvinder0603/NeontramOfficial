"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import adarsha from '../assets/adarsha.png';
import bijit from '../assets/bijit.png';
import doctor from '../assets/doctor.png';
import fam from '../assets/fam.png';

const Team = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })  
  }, []);
  const teamMembers = [
    {
      name: 'Adarsha Narayan Mallick',
      role: 'CEO, Director',
      bio: 'Ph. D. IIT Ropar',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/bc52b82b-1f86-48bc-90ee-04e4c3b79058%20(1).jpg',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
 
    {
      name: 'Bijit Basumatary',
      role: 'CO-FOUNDER, CTO.',
      bio: 'M. Tech-Ph. D. IIT Ropar',
      imageUrl: 'https://media.licdn.com/dms/image/D4D03AQGhtBlunpoMKQ/profile-displayphoto-shrink_400_400/0/1673607073098?e=1699488000&v=beta&t=xIIJOt38bxdJSpbW3tumvwjM8c3YvnPrFh88Q7l0DXE',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Dr. Ashish Sahani',
      role: 'SCIENTIFIC ADVISOR',
      bio: 'Assistant Prof ,IIT Ropar',
      imageUrl: 'https://media.licdn.com/dms/image/D4D03AQHYP4Fu7zFzTw/profile-displayphoto-shrink_800_800/0/1682529797316?e=1699488000&v=beta&t=HJGV20f2eMOBx6rYoRbjnaJPbm0cOJWBeZe_09HNe98',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Dr. Kamaldeep Arora',
      role: 'CLINICAL-ADVISOR',
      bio: 'Associate Prof, DMC & H Ludhiana',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/kamal.png',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Nathasha V P ',
      role: 'Electronic Engineer',
      bio: '',
      imageUrl: 'https://media.licdn.com/dms/image/C4D03AQEwU3ivIIUL1w/profile-displayphoto-shrink_400_400/0/1659723947080?e=1699488000&v=beta&t=36kkCNlm5xSRKYGaPTDIj4km9j0spvlC4JgKB2K1EL8',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Arvinder Singh',
      role: 'Web Intern',
      bio: 'FULL STACK  INTERN',
      imageUrl: 'https://media.licdn.com/dms/image/C4E03AQHfSVY-FWBYCQ/profile-displayphoto-shrink_800_800/0/1634400083038?e=1698883200&v=beta&t=TGeJ9i9-oFKpl1jnNA8tqG4_ywclaKY5dFpwYzbJXH4',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: ' Prabhas Chandra Sankhua',
      role: 'Web Intern',
      bio: 'FULL STACK  INTERN',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/DSC_8008-01.jpg',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Gurupad ray',
      role: 'Software Development intern',
      bio: 'WEB DEVELOPMENT INTERN',
      imageUrl: 'https://media.licdn.com/dms/image/D4D03AQFm9nZvicodpw/profile-displayphoto-shrink_400_400/0/1684917528193?e=1699488000&v=beta&t=Cn3JZu9oJH3Ggpzvflycq3wgC2xlmjVyuv7DEBEy3GY',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
 
    {
      name: 'Ms Barenya Sarangi',
      role: 'Marketing Intern',
      bio: '',
      imageUrl: 'https://media.licdn.com/dms/image/D4D03AQHxdqhcAptG_A/profile-displayphoto-shrink_400_400/0/1675079552963?e=1699488000&v=beta&t=Cwbv4i0Ax8NRFL6l4ROcA5YcSn_Xj-McjBKad0GIHTQ',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
  ];

  return (
    <section id="team"  
   
    className=" body-font  justify-center">
      <div className="container px-5 py-24 mx-auto flex justify-center flex-col">
        <div  className="flex flex-col text-center w-full mb-20">
          <h1 className="lg:text-[70px] text-[35px] font-medium title-font mb-4 text-gray-900 tracking-widest">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 lg:Text-[47px]  text-[32px] mx-auto leading-relaxed text-base">
          Meet the Dedicated Minds Behind
          </p>
        </div>
        <div className='flex justify-center'>
        <div  data-aos="fade-up"  className="flex flex-wrap justify-center ">
          {teamMembers.map((member, index) => (
            <div  data-aos="fade-up" key={index} className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center shadow-2xl rounded-3xl">
                <img
                  alt={member.name}
                  className="flex-shrink-0  m-6 rounded-lg w-48 h-50 object-cover object-center sm:mb-0 mb-4"
                  src={member.imageUrl}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium text-lg ">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{member.role}</h3>
                  <p className="mb-4">{member.bio}</p>
                  <span className="inline-flex">
                    {member.socialMedia.map((social, socialIndex) => (
                      <a
                        key={socialIndex}
                        className="text-gray-500"
                        href={social.link}
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          {/* Insert social media SVG path here */}
                        </svg>
                      </a>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Team;
