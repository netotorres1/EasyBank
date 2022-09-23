import LogoImg from './../../assets/images/logo.svg'
import React from 'react'
import './navbar.css'


const Navbar = () => {
  return (
    <div className='containerNavbar'>
        <img src={LogoImg} className='logo' />
        <nav className='Items'>
            <button className='Item'>Home</button>
            <button className='Item'>About</button>
            <button className='Item'>Contact</button>
            <button className='Item'>Blog</button>
            <button className='Item'>Careers</button>
        </nav>
        <button className='BtnRequest'>Request Invite</button>
    </div>
  )
}

export default Navbar