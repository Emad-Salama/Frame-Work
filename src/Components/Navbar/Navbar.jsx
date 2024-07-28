import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='bg-[#2C3E50] text-white flex justify-between  font-bold fixed z-50 w-full'>
            <div>
                <h1 className='mt-3 p-2 uppercase text-3xl'>
                    <NavLink className={'home ms-20'} to={''}>Start Framework</NavLink>
                </h1>
            </div>
            <div>
                <ul className='  flex p-4 m-2 justify-around me-20 uppercase'>
                    <li>
                        <NavLink className='m-2  p-2 rounded' to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='m-2 p-2 rounded' to={'/portofolio'}>Portofolio</NavLink>
                    </li>
                    <li>
                        <NavLink className='m-2 p-2 rounded' to={'/contact'}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
