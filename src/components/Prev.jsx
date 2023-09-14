"use client"
import React, { useEffect, useState } from 'react'
import bed2 from "../assets/bed2.jpg"
import Image from 'next/image'
import pr from "../assets/pr.png"
import Carti from './Carti'


const Prev = () => {

  const [isClicked, setIsClicked] = useState(false);
  const [showCart, setShowCart] = useState(false);


  const [cart, SetCart] = useState([])


  const addToCart = (product) => {
    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
      // If the item already exists, update the quantity
      const updatedCart = cart.map(item =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      SetCart(updatedCart);
    } else {
      // If the item doesn't exist, add it to the cart
      SetCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  const updateQuantity = (index, change) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += change;

    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1); // Remove item if quantity is 0
    }

    SetCart(updatedCart);
  }


  const toggleCart = () => {
    setShowCart(prevState => !prevState);
  }



  //for like 
  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state on each click
  };




  return (
    <div className='flex flex-col lg:flex-row md:flex-col   justify-center ' id="products">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-64 object-center rounded"
              src={bed2}
            />
            <div className="lg:w-1/2  w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Neontram</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Anti-Sore Neontal Bed
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Neonatal Anti-sore bed is designed for NICUs.
                The size of the bed is accurate to the currently deployed bed. The densely packed alternating pressure channels are uniquely designed for comfortable sleep. The material and adhesives used is biocompatible
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                <div className="flex ml-6 items-center">

                  <div className="relative">

                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >

                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">₹ 11999</span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={() => {
                    addToCart({ name: "Anti-Sore Neontal Bed", price: 11999 });
                    setShowCart(true) // Add product to cart
                  }}
                >
                Add to cart
                </button>
                <button
                  
                  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill={isClicked ? '#FFC0CB' : 'currentColor'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    onClick={handleClick}

                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full  lg:h-64 object-center rounded"
              src={pr}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Neontram</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Neonatal Formula Milk Dispenser
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">

                The automatic formula milk dispenser represents a major step forward in the field of infant nutrition, offering parents an innovative, convenient, and efficient solution for preparing formula milk for their infants. With its advanced features and processes, this multi-tasking device is designed to save parents time and effort, while ensuring that their infants receive the best possible nutrition.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                <div className="flex ml-6 items-center">

                  <div className="relative">

                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >

                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">₹ 17999</span>
                <button
                  onClick={() => {
                    addToCart({ name: "Neonatal Formula Milk Dispenser", price: 17999 }); 
                    setShowCart(true) 
                  }}

                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add to cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill={isClicked ? '#FFC0CB' : 'currentColor'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    onClick={handleClick}

                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button
        onClick={toggleCart}
        className="fixed bottom-4 right-4 bg-indigo-500 text-white px-4 py-2 rounded"
      >
        {showCart ? 'Hide Cart' : 'Show Cart'}
      </button>

      {showCart && (
        <div className="fixed bottom-0 right-0 bg-white border border-gray-300 p-4 rounded">
          <Carti cart={cart} updateQuantity={updateQuantity} closeCart={toggleCart} />
        </div>
      )}
          </div>

  )
}

export default Prev