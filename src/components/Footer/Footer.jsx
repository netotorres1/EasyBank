import logo from './../../assets/images/logo.svg'
import facebook from './../../assets/images/icon-facebook.svg'
import youtube from './../../assets/images/icon-youtube.svg'
import twitter from './../../assets/images/icon-twitter.svg'
import pinterest from './../../assets/images/icon-pinterest.svg'
import instagram from './../../assets/images/icon-instagram.svg'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='containerfooter'>
        <div className='containerfootercontent'>
            <div className='containericons'>
                <img className='footerlogo' src={logo} />
                <div className='icons'>
                    <img alt='facebook' className='footericon' src={facebook} />
                    <img alt='youtube' className='footericon' src={youtube} />
                    <img alt='twitter' className='footericon' src={twitter} />
                    <img alt='pinterest' className='footericon' src={pinterest} />
                    <img alt='instagram' className='footericon' src={instagram} />
                </div>
            </div>
            <div className='containerlists'>
                <ul className='footerlista'>
                    <li className='footeritemlista' >About Us</li>
                    <li className='footeritemlista'>Contact</li>
                    <li className='footeritemlista'>Blog</li>
                </ul>
                <ul className='footerlista'>
                    <li className='footeritemlista'>Careers</li>
                    <li className='footeritemlista'>Support</li>
                    <li className='footeritemlista'>Privacy Policy</li>
                </ul>
            </div>
            <div className='containerrequestinvite'>
                <button className='BtnRequestFooter'>Request Invite</button>
                <p className='allrightsreserved'>© Easybank. All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer