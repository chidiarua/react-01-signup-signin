import React from 'react'
import alexa from './images/alexa.png';



const Header = () => {
  return (
    <header className='bg-slate-600 flex py-3 gap-5 fixed w-full top-0'>
        <img className='h-8 w-8 ml-5 cursor-pointer' src={alexa} alt='logo'/>
        <nav className='cursor-pointer list-none text-xs font-semibold flex items-center gap-3 text-gray-300'>
            <li>Home</li>
            <li>Features</li>
        </nav>
    </header>
  )
}

export default Header