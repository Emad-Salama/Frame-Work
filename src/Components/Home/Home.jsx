import React from 'react';
import avatarImg from '../../assets/images/avataaars.svg';

export default function Home() {
  return (
    <div className='bg-[#1abc9c] flex flex-col items-center justify-center text-white '>
      <div className='text-center'>
        <img src={avatarImg} className='mb-7 mt-16' alt="avatar image" />
      </div>
      <h2 className='font-bold uppercase text-4xl mb-3'>start Framework</h2>
      <div className='flex justify-center items-center mb-3 '>
        <div className='line me-2'></div>
        <i className='fa-solid fa-star'></i>
        <div className='line ms-2'></div>
      </div>
      <div>Graphic Artist - Web Designer - Illustrator</div>
    </div>
  )
}
