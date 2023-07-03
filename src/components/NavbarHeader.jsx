import React from 'react'
import './css/NavbarHeader.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'

const NavbarHeader = () => {
  return (
    <nav className='navbar-header container'>
        <div className="navbar-header-left">
         <a href="#"><BsFillTelephoneFill  className='navbar-header-left-icon'/> <span>055 555 55 55</span></a>   
        </div>
        <div className="navbar-header-right">
            <BiLogoFacebook className=' navbar-header-right-icon'/>
            <BiLogoLinkedin  className=' navbar-header-right-icon'/>
            <AiOutlineTwitter  className=' navbar-header-right-icon'/>
            <AiOutlineInstagram  className=' navbar-header-right-icon'/>
            <AiFillYoutube  className=' navbar-header-right-icon'/>
        </div>
    </nav>
  )
}

export default NavbarHeader