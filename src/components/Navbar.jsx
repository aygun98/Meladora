import React from 'react'
import './css/Navbar.css'
import { FaBars } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav className='container navbar-conatiner'>
            <a class="navbar-brand" href="#"></a>
            <div className='nav-links-contain'>
            <FaBars className='fabars-icon' />
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">Biz kimik?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Bağlarımız</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Məhsullarımız</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Xidmətlərimiz </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sosial məsuliyyət</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Əlaqə</a>
                </li>

            </ul>

            <BiSearchAlt className='searchimg' />
            </div>
        </nav>
    )
}

export default Navbar