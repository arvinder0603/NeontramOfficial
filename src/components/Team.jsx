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
import   {BsLinkedin} from "react-icons/bs";
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
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/adarsha7-narayan7-mallick7/' },
      ],
    },
 
    {
      name: 'Bijit Basumatary',
      role: 'CO-FOUNDER, CTO.',
      bio: 'M. Tech-Ph. D. IIT Ropar',
      imageUrl: 'https://media.licdn.com/dms/image/D4D03AQGhtBlunpoMKQ/profile-displayphoto-shrink_400_400/0/1673607073098?e=1699488000&v=beta&t=xIIJOt38bxdJSpbW3tumvwjM8c3YvnPrFh88Q7l0DXE',
      socialMedia: [
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/bijitbasumatary/' },
      ],
    },
    {
      name: 'Dr. Ashish Sahani',
      role: 'SCIENTIFIC ADVISOR',
      bio: 'Assistant Prof ,IIT Ropar',
      imageUrl: 'https://media.licdn.com/dms/image/D4D03AQHYP4Fu7zFzTw/profile-displayphoto-shrink_800_800/0/1682529797316?e=1699488000&v=beta&t=HJGV20f2eMOBx6rYoRbjnaJPbm0cOJWBeZe_09HNe98',
      socialMedia: [
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/ashishksahani/' },
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
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/nathasha-vp-993bb1222/' },
      ],
    },
    {
      name: 'Arvinder Singh',
      role: 'Web Intern',
      bio: 'FULL STACK  INTERN',
      imageUrl: 'https://media.licdn.com/dms/image/C4E03AQHfSVY-FWBYCQ/profile-displayphoto-shrink_800_800/0/1634400083038?e=1698883200&v=beta&t=TGeJ9i9-oFKpl1jnNA8tqG4_ywclaKY5dFpwYzbJXH4',
      socialMedia: [
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/arvinder-singh-337501223/' },
      ],
    },
    {
      name: ' Prabhas Chandra Sankhua',
      role: 'Web Intern',
      bio: 'FULL STACK  INTERN',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/b801ff74-78f1-4a36-a8ac-fac6d56d7781.jpg',
      socialMedia: [
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/barenya-sarangi/' },
      ],
    },
    {
      name: 'Gurupad ray',
      role: 'Software Development intern',
      bio: 'WEB DEVELOPMENT INTERN',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/0c4d87cf-0a71-44eb-b3b4-8ca88291e015.jpg',
      socialMedia: [
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/gurupad-ray-125254151/' },
      ],
    },
 
    {
      name: 'Ms Barenya Sarangi',
      role: 'Marketing Intern',
      bio: '',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/a8f896e2-df4a-40b4-ae3d-3f3a837f0dbb.jpg',
      socialMedia: [
      
        { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/barenya-sarangi-64a859126/' },
        // Add more social media links as needed
      ],
    },
    
  ];

  return (
    <section   id="team"
   
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
                  className="flex-shrink-0   m-6 rounded-3xl hover:rounded-lg duration-150 hover:h-52 hover:w-54 w-48 h-48 object-cover object-center sm:mb-0 mb-4"
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
      target="_blank" // Open the link in a new tab/window
      rel="noopener noreferrer"
    >
     
      {social.platform === 'LinkedIn' && < BsLinkedin   size={35}/>} {/* Change the icon class to match your chosen icon */}
      {/* Add more social media icons for other platforms as needed */}
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
