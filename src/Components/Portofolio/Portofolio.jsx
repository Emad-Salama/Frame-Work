import React from 'react'
import imgOne from '../../assets/images/poert1.png';
import imgTwo from '../../assets/images/port2.png';
import imgThree from '../../assets/images/port3.png';

export default function Portofolio() {
  return (
  
    <div className=' flex flex-col items-center justify-center text-[#2C3E50] '>
      <h2 className='font-bold uppercase text-4xl mb-4 mt-20'>portfolio component</h2>
      <div className='flex justify-center items-center mb-3'>
        <div className='line bg-[#2C3E50] me-2'></div>
        <i className='fa-solid fa-star'></i>
        <div className='line bg-[#2C3E50] ms-2'></div>
      </div>

     
        <div className=" flex flex-wrap">
          <div className='card overflow-hidden relative'>
            <img src={imgOne} className='rounded ' alt="" />
            <div className="layer absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>

          <div className='card overflow-hidden relative'>
            <img src={imgTwo} className='rounded ' alt="" />
            <div className="layer absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>

          <div className='card overflow-hidden relative'>
            <img src={imgThree} className='rounded ' alt="" />
            <div className="layer absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>

          <div className='card overflow-hidden relative'>
            <img src={imgOne} className='rounded ' alt="" />
            <div className="layer absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>

          <div className='card overflow-hidden relative'>
            <img src={imgTwo} className='rounded ' alt="" />
            <div className="layer absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>

          <div className='card overflow-hidden relative'>
            <img src={imgThree} className='rounded ' alt="" />
            <div className="layer absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>


        </div>


      
      


    </div>
    
  )
}
