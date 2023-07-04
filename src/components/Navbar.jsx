import React from 'react'
import './css/Navbar.css'
import Offcanvas from './Offcanvas'
import OffcanvasSearch from './OffcanvasSearch'
import { FaBars } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav className='container navbar-conatiner'>
            <a className="navbar-brand" href="#"></a>
            <div className='nav-links-contain'>
            <FaBars className='fabars-icon' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"/>
            <Offcanvas/>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">Biz kimik?</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Bağlarımız</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Məhsullarımız</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Xidmətlərimiz </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sosial məsuliyyət</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Əlaqə</a>
                </li>

            </ul>

            <BiSearchAlt className='searchimg'  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"  />
            <OffcanvasSearch/>
            </div>
        </nav>
    )
}

export default Navbar