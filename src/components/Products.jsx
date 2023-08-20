import React from 'react'

const Products = () => {
  return (
    <div className='mt-[130px]'> 
     
     <div className='grid lg:grid-cols-2 lg:grid-rows-2 h-[100vh] gap-11 '>
        <div className='flex justify-center items-center' > 
            <h1 className='text-[70px] font-bold  '>Our Products</h1>
        </div>

        <div className='bg-[#de9321]  rounded-3xl shadow-2xl  shadow-[#de9321] flex justify-center items-center'>
                <h1>PR1 Image</h1>
         
        </div>
        
        <div className='bg-[#52D1DC] rounded-3xl shadow-2xl shadow-[#52D1DC] flex justify-center items-center'>
                <h1>Info </h1>
         
        </div>

        <div className='bg-[#9883D8] rounded-3xl shadow-2xl shadow-[#9883D8] flex justify-center items-center'>
                <h1>PR2 Image</h1>
         
        </div>
     </div>

    </div>
  )
}

export default Products