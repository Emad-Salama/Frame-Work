import React from 'react'

export default function About() {
  return (
    <div className='bg-[#1abc9c] flex flex-col items-center justify-center text-white '>
      <h2 className='font-bold uppercase text-4xl mb-4 mt-20'>about component</h2>
      <div className='flex justify-center items-center'>
        <div className='line bg-white me-2'></div>
        <i className='fa-solid fa-star'></i>
        <div className='line bg-white ms-2'></div>
      </div>
      <div className="container ">
        <div className="row">
          <div className='w-1/2 text-left text-white me-4'>
            <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
          </div>
          <div className='w-1/2 text-left text-white'>
          <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
          </div>
        </div>
      </div>
    </div>
  )
}
