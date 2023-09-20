"use client"

import axios from 'axios';
import React, { useState } from 'react'

const MapPage = () => {

    const[name,setName]=useState('');
    const[mail,setMail]=useState('');
    const[text,setText]=useState('');

     const submitHandler =(e)=>{
        e.preventDefault();
        const data={
            Name:name,
            Mail:mail,
           

        }

        axios.post('https://sheet.best/api/sheets/a0b46815-64dc-4fc7-8f95-ffd68a412d94',data).then((response)=>{
             console.log(response)
             setName('');
             
             setMail('');
        })
     }

  return (
    <section className="text-gray-600 body-font relative" id="contact">
    <div className="absolute inset-0 bg-gray-300">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=IIIT%20ROPAR+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={{ }}
      ></iframe>
   
    </div>
    <div className="container px-5 py-24 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
         Contact us
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          We will get back to you asap.
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="name"
            id="name"
            onChange={((e)=>setName(e.target.value))}
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="leading-7 text-sm text-gray-600"
          >
            Mail
          </label>
          <input
            id="mail"
            name="mail"
            onChange={((e)=>setMail(e.target.value))}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-12 text-base outline-none text-gray-700 py-1 px-3  leading-6 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
        <button   onClick={submitHandler}  className="text-white m-6 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact us
        </button>
       
      </div>
    </div>
  </section>
  )
}

export default MapPage