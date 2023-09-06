
import React from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import adarsha from '../assets/adarsha.png';
import bijit from '../assets/bijit.png';
import doctor from '../assets/doctor.png';
import fam from '../assets/fam.png';

const Team = () => {
  
  const teamMembers = [
    {
      name: 'Adarsha Narayan Mallick',
      role: 'CEO, Director',
      bio: 'Ph. D. IIT Ropar',
      imageUrl: 'https://media.canva.com/1/image-resize/1/549_550_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9zNDNJNC9NQUZ0cFhzNDNJNC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAANgtBlXh8yICyg5GuYqEGPxcP0ALgMQ0SpXAWAY00_8Y&exp=1693992515&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAK-4tjc13W_afTi4At7HPjonXUQ56PC5qlzbJb8AcwZV',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
 
    {
      name: 'Bijit Basumatary',
      role: 'CO-FOUNDER, CTO.',
      bio: 'M. Tech-Ph. D. IIT Ropar',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/bijit.png',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Dr. Ashish Sahani',
      role: 'SCIENTIFIC ADVISOR',
      bio: 'Assistant Prof ,IIT Ropar',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/doctor.png',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Dr. Kamaldeep Arora',
      role: 'CLINICAL-ADVISOR',
      bio: 'Associate Prof, DMC & H Ludhiana',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/advisor.png',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Nathasha V P ',
      role: 'Electronic Engineer',
      bio: '',
      imageUrl: 'https://media.canva.com/1/image-resize/1/550_550_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9Ra1hxNC9NQUZua2RRa1hxNC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAHsnSGu71KGteIGZDf3iwn0tCWmDHuspfhlV84gy9dcc&exp=1693994544&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAB3ZIB8crIdmj5RAbhWeqBBX9nN_wvVUsqcN9PC4Alqg',
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
      name: ' Prabhas Chandra',
      role: 'Web Intern',
      bio: 'FULL STACK  INTERN',
      imageUrl: 'https://media.canva.com/1/image-resize/1/412_550_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9FTW5mOC9NQUZua2FFTW5mOC8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAAPCmniH5Fr6B8VJh0KP084WOAKj2FEU1fOtcy0fIPfDA&exp=1693994024&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAAK3-b7uMsscSIFxR_NbfO5KAnBJUk_HWbtN3_CY5BaBJ',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Gurupad ray',
      role: 'Software Development intern',
      bio: '',
      imageUrl: 'https://media.canva.com/1/image-resize/1/390_510_92_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS83UkZDSS9NQUZuamw3UkZDSS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAACLqSmSTN3kVtQeNFwiVgDwVX8BzCDFIr5RndfPVVmjA&exp=1693993396&x-canva-quality=thumbnail_large&csig=AAAAAAAAAAAAAAAAAAAAACAB1B2HYvrRd4C7UucAzytbz0oKfpDLB239zVvPxsNL',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
 
    {
      name: 'Ms Barenya Sarangi',
      role: 'Marketing Intern',
      bio: '',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/marketing.jpg',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
  ];

  return (
    <section id="team"  className=" body-font  justify-center">
      <div className="container px-5 py-24 mx-auto flex justify-center flex-col">
        <div  className="flex flex-col text-center w-full mb-20">
          <h1 className="lg:text-[70px] text-[35px] font-medium title-font mb-4 text-gray-900 tracking-widest">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 text-[47px] mx-auto leading-relaxed text-base">
            Meet our Proffesional
          </p>
        </div>
        <div className='flex justify-center'>
        <div className="flex flex-wrap justify-center ">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center shadow-2xl rounded-3xl">
                <img
                  alt={member.name}
                  className="flex-shrink-0 mt-3 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
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
