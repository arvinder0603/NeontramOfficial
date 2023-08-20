"use client"

import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    marginTop:"200px"
  };
const Coursel = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
  return (
    <div className='flex h-[100vh] '>

  
    <Carousel  afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    </div>
  )
}

export default Coursel