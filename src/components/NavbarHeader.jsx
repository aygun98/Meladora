import React from 'react'
import './css/NavbarHeader.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'

const NavbarHeader = ({navbarheader, navbarHeaderContainer, navbarHeaderRightIcon}) => {
  return (
    <nav className={navbarHeaderContainer}>
        <div className={navbarheader}>
         <a href="#"><BsFillTelephoneFill  className='navbar-header-left-icon'/> <span>055 555 55 55</span></a>   
        </div>
        <div className="navbar-header-right">
            <BiLogoFacebook className={navbarHeaderRightIcon}/>
            <BiLogoLinkedin  className={navbarHeaderRightIcon}/>
            <AiOutlineTwitter  className={navbarHeaderRightIcon}/>
            <AiOutlineInstagram  className={navbarHeaderRightIcon}/>
            <AiFillYoutube  className={navbarHeaderRightIcon}/>
        </div>
    </nav>
  )
}

export default NavbarHeader