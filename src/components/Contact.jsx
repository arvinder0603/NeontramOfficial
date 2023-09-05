"use client"


import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {
    const[name,setName]=useState('');
    const[mail,setMail]=useState('');
    const[text,setText]=useState('');

     const submitHandler =(e)=>{
        e.preventDefault();
        const data={
            Name:name,
            Mail:mail,
            Text:text

        }

        axios.post('https://sheet.best/api/sheets/a0b46815-64dc-4fc7-8f95-ffd68a412d94',data).then((response)=>{
             console.log(response)
             setName('');
             setText('');
             setMail('');
        })
     }

  return (

    <section className="text-gray-600  body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our team will reach you as soon as possible.</p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={((e)=>setName(e.target.value))}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={((e)=>setMail(e.target.value))}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        
       
          <div className="p-2 w-full">
            <button  onClick={submitHandler} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</button>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a className="text-indigo-500">contact@neontram.com</a>
            <p className="leading-normal my-5">C/o 66, AT Balimundali, PO Badapokhari, VIA<br />Tudigadia, Balasore, Orissa, India, 756047</p>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact