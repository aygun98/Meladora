import React from 'react'
import './css/Offcanvas.css'

 import {HiOutlineXMark} from 'react-icons/hi2'
import { NavLink, Link } from 'react-router-dom'



const Offcanvas = ({handleCloseMenu, mobillogo,  overlaymenuKontainer}) => {
    return (
        <div className={overlaymenuKontainer}>
          
                <div className="overlaymenu-header">
                  <Link  to="/"> <div className="overlaymenu-logo"><img src={mobillogo} alt="logo" /></div></Link> 
                    <div className="overlaymenu-xmark">
                       <button className='overlaymenu-button-x-mark' onClick={handleCloseMenu}><HiOutlineXMark  className='menu-xmark'/></button> 
                    </div>
                </div>
                <div className="overlaymenu-body">
                    <ul className="overlaymenu-kontainer-links">
                        <li className="overlaymenu-nav-item">
                            <NavLink className="overlaymenu-nav-link " aria-current="page" to="/bizkimik" >Biz kimik?</NavLink>
                        </li>
                        <li className="overlaymenu-nav-item">
                            <NavLink className="overlaymenu-nav-link" to="/baglarimiz">Bağlarımız</NavLink>
                        </li>
                        <li className="overlaymenu-nav-item">
                            <NavLink className="overlaymenu-nav-link" to="/mehsullarimiz">Məhsullarımız</NavLink>
                        </li>
                        <li className="overlaymenu-nav-item">
                            <NavLink className="overlaymenu-nav-link" to="/xidmetlerimiz">Xidmətlərimiz </NavLink>
                        </li>
                        <li className="overlaymenu-nav-item">
                            <NavLink className="overlaymenu-nav-link" to="/sosialmesuliyyet">Sosial məsuliyyət</NavLink>
                        </li>
                        <li className="overlaymenu-nav-item">
                            <NavLink className="overlaymenu-nav-link" to="/elaqe">Əlaqə</NavLink>
                        </li>

                    </ul>
                </div>
            

        </div>










       
    )
}

export default Offcanvas