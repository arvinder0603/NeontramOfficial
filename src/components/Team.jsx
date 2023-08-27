import React from 'react';
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
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/adarsha.png',
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
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/DSC_8008-01.jpg',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Gurupad ray',
      role: 'Software Development intern',
      bio: '',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/PhotoFormal.jpg',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Nathasha V P ',
      role: 'Electronic Engineer',
      bio: '',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/IMaGES-DATA/main/PSFix_20230703_142915.jpg',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
  ];

  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-[60px] font-medium title-font mb-4 text-gray-900 tracking-widest">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 text-[37px] mx-auto leading-relaxed text-base">
            Meet our Proffesional
          </p>
        </div>
        <div className='flex justify-center'>
        <div className="flex flex-wrap ">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full flex flex-col items-center sm:justify-start justify-center text-center">
                <img
                  alt={member.name}
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={member.imageUrl}
                />
                <div className="flex-grow">
                  <h2 className="title-font font-medium text-lg text-gray-900">
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
