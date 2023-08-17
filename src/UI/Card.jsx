import Image from 'next/image'
import React from 'react'
import { BsFillStarFill } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className='flex'>
  <div>

    <div>
    <h1>{props.review}</h1>
    </div>
  

  </div>
        

    </div>
  )
}

export default Card