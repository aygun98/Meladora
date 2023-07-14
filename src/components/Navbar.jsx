import React from 'react'
import './css/Navbar.css'
import NavbarHeader from './NavbarHeader'
import { FaBars } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'
//img



const Navbar = ({ handleOpenMenu, handleOpenSearch,logo, navlink, navbarheader, navbarHeaderContainer, navbarHeaderRightIcon, fixed }) => {
 
    return (
        <>
            {/* ${window.scrollY >= 60? 'navbar-sticky' : ''} */}
            <NavbarHeader navbarHeaderRightIcon={navbarHeaderRightIcon}  navbarheader={navbarheader} navbarHeaderContainer={navbarHeaderContainer}  />
            <nav className={ fixed? "navbar-conatiner  fixed-top" :' navbar-conatiner navbar-conatiner-relative '}  >
                <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                <div className='nav-links-contain '>
                    <button className='button-fabars-icon' onClick={handleOpenMenu}><FaBars className='fabars-icon' data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample" /></button>
                    {/* <Offcanvas /> */}
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                          <NavLink className={navlink} aria-current="page" to="/bizkimik" >Biz kimik? </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={navlink} to="/baglarimiz">Bağlarımız</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={navlink} to="/mehsullarimiz">Məhsullarımız</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={navlink} to="/xidmetlerimiz">Xidmətlərimiz </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={navlink} to="/sosialmesuliyyet">Sosial məsuliyyət</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={navlink} to="/elaqe">Əlaqə</NavLink>
                        </li>

                    </ul>

                    <BiSearchAlt onClick={handleOpenSearch} className='searchimg' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" />
                    {/* <OffcanvasSearch/> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar