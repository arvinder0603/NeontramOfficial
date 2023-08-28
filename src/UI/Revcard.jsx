import React from 'react'
import revdoc from "../assets/revdoc.jpg"
import Image from 'next/image'
import bedrev from "../assets/bedrev.png"
import bedchild from "../assets/bedchild.png"
export const Revcard = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="grid lg:grid-cols-3 text-center gap-12">
        <div className="sm:w-1/2 mb-10 px-4 rounded-3xl shadow-2xl">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center h-full w-full"
              src={revdoc}
            />
          </div>
          <h2 className="title-font text-[20px] font-medium text-gray-900 mt-6 mb-3">
            Used By experienced doctors
          </h2>
         
         
        </div>
        <div className="sm:w-1/2 mb-10 px-4 rounded-3xl shadow-2xl">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center h-full w-full"
              src={bedrev}
            />
          </div>
          <h2 className="title-font text-[20px]  font-medium text-gray-900 mt-6 mb-3">
            Care for child.
          </h2>
         

         
        </div>
        <div className="sm:w-1/2 mb-10 px-4 rounded-3xl shadow-2xl">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center h-full w-full"
              src={bedchild}
            />
          </div>
          <h2 className="title-font text-[20px]  font-medium text-gray-900 mt-6 mb-3">
             For smooth time of child.
          </h2>
         
         
         
        </div>
       
      </div>
    </div>
  </section>
  )
}
