import LogoImg from './../../assets/images/logo.svg'
import hamburger from './../../assets/images/icon-hamburger.svg'
import React from 'react'
import './navbar.css'
import { useRef, useState } from 'react';


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick1 = () => setIsActive(!isActive)
  const dropDownRef = useRef(null);
  return (
    <div className='containerNavbar'>
        <img alt='easybank' src={LogoImg} className='logo' />
        <div ref={dropDownRef} className={`Items ${isActive ? 'active' : 'inactive'}`} >
            <button className='Item'>Home</button>
            <button className='Item'>About</button>
            <button className='Item'>Contact</button>
            <button className='Item'>Blog</button>
            <button className='Item'>Careers</button>
        </div>
        <button className='BtnRequest'>Request Invite</button>
        <img alt='menu' onClick={onClick1} className='hamburger' src={hamburger} />
    </div>
  )
}

export default Navbar