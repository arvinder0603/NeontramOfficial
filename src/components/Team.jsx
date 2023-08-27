import React from 'react';
import Image from 'next/image';

const Team = () => {
  const teamMembers = [
    {
      name: 'Adarsha Narayan Mallick',
      role: 'CEO, Director',
      bio: 'Ph. D. IIT Ropar',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/NeontramOfficial/main/src/assets/adarsha.png?token=GHSAT0AAAAAACD7TIVTFYWWZ4XOOFN57RZSZHLE6SQ',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
 
    {
      name: 'Bijit Basumatary',
      role: 'CO-FOUNDER, CTO.',
      bio: 'M. Tech-Ph. D. IIT Ropar',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/NeontramOfficial/main/src/assets/bijit.png?token=GHSAT0AAAAAACD7TIVT7Y35OSAPGOANRMHOZHLE4UQ',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Dr. Ashish Sahani',
      role: 'SCIENTIFIC ADVISOR',
      bio: 'Assistant Prof ,IIT Ropar',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/NeontramOfficial/main/src/assets/doctor.png?token=GHSAT0AAAAAACD7TIVTVTJZVYZYK54HYKNYZHLE7CA',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Dr. Kamaldeep Arora',
      role: 'CLINICAL-ADVISOR',
      bio: 'Associate Prof, DMC & H Ludhiana',
      imageUrl: 'https://dummyimage.com/200x200',
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
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/NeontramOfficial/3a37002224db9a1cb8f841b01eb6c3379b4d0072/src/assets/DSC_8008-01.jpg?token=AYORZEKWDOXEXTZ6O3VCBDTE5MTI2',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Gurupad ray',
      role: 'Software Development intern',
      bio: '',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/NeontramOfficial/3a37002224db9a1cb8f841b01eb6c3379b4d0072/src/assets/PhotoFormal.jpg?token=AYORZENWEVJJBYGJ5W5T5OLE5MTI2',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
    {
      name: 'Nathasha V P ',
      role: 'Electronic Engineer',
      bio: '',
      imageUrl: 'https://raw.githubusercontent.com/arvinder0603/NeontramOfficial/3a37002224db9a1cb8f841b01eb6c3379b4d0072/src/assets/PSFix_20230703_142915.jpg?token=AYORZEMTE4KKYDE5TYBQMPLE5MTI2',
      socialMedia: [
        // Define social media links for this team member
      ],
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
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
    </section>
  );
};

export default Team;
