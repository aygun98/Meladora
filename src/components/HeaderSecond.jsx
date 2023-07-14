import React, { useState } from 'react'
import './css/HeaderSecond.css'
import BlackWhite from './svg/blackLogo.png'
//img
import BlackLogo from './svg/blackLogo.png'
import WhiteLogo from './svg/whiteLogo.png'
import BitkiIcon from './svg/bitkiIcon.png'

import Navbar from './Navbar'
import Offcanvas from './Offcanvas'
import OffcanvasSearch from './OffcanvasSearch'

const HeaderSecond = () => {
    //scroll
    const [fixed, setFixed]= useState(false)
     window.addEventListener('scroll', ()=>{
        if(window.scrollY > 200){
            setFixed(true)
        }else{
            setFixed(false)
        }
     })


    const [showSearch, setshowSearch] = useState(false)
    const handleOpenSearch = () => setshowSearch(true)
    const handleCloseSearch = () => setshowSearch(false)
    //
    const [showMenu, setShowMenu] = useState(false)
    const handleOpenMenu = () => setShowMenu(true)
    const handleCloseMenu = () => setShowMenu(false)
    return (
        <div className='header-second'>
            <Navbar fixed={fixed} navbarHeaderRightIcon={'navbar-header-right-icon-hover-black '} navbarHeaderContainer={'navbar-header-border-black container'} navbarheader={'navbar-header-left-number-black'} navlink={fixed? "nav-link " :'second-nav-link nav-link'}  logo={fixed? WhiteLogo : BlackLogo} handleOpenMenu={handleOpenMenu} handleOpenSearch={handleOpenSearch} />
            <div className={`searchmenu ${showSearch ? ' searchmenu-aktive' : ''}  `}>
                <OffcanvasSearch searchmenucontainer={'searchmenu-container-second'} handleCloseSearch={handleCloseSearch} />
            </div>

            <div className={`overlaymenu-background ${showMenu ? ' backaktiv' : ''}  `} onClick={handleCloseMenu}></div>
            <div className={`overlaymenu ${showMenu ? 'aktive' : ''}`}>
                <Offcanvas mobillogo={BlackWhite} overlaymenuKontainer={"overlaymenu-kontainer-second"} handleCloseMenu={handleCloseMenu} />
            </div>

            <div className='header-second-bottom'>
                <div className='header-second-bottom-back'></div>
                <div className='header-second-bottom-icon'>
                    <img className='w-100 h-100' src={BitkiIcon} alt="" />
                </div>
            </div>

        </div>
    )
}

export default HeaderSecond