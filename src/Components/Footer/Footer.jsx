import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#2C3E50]'>
      <div className="row">
        <div className='w-4/12 text-center text-white'>
          <h3 className='uppercase font-medium'>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div className='w-4/12 text-center text-white'>
          <h3 className='uppercase font-medium'>AROUND THE WEB</h3>
          <div className="icons">
            <i className='fa-brands fa-facebook mx-1 icon'></i>
            <i className='fa-brands fa-twitter mx-1 icon'></i>
            <i className='fa-brands fa-linkedin-in mx-1 icon'></i>
            <i className='fa-solid fa-globe mx-1 icon'></i>
          </div>
        </div>
        
        <div className='w-4/12 text-center text-white'>
          <h3 className='uppercase font-medium'>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
      <div>
        <p className='text-center text-white bg-[#1A252F] p-8 text-[rgb(240, 248, 255)]'>Copyright © Your Website 2021</p>
      </div>
    </div>
    
  )
}
