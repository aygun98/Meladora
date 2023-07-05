import React from 'react'
import './css/Offcanvas.css'
 import {HiOutlineXMark} from 'react-icons/hi2'



const Offcanvas = ({handleCloseMenu}) => {
    return (
        <>
          
                <div className="overlaymenu-header">
                    <div className="overlaymenu-logo"></div>
                    <div className="overlaymenu-xmark">
                       <button className='overlaymenu-button-x-mark' onClick={handleCloseMenu}><HiOutlineXMark  className='menu-xmark'/></button> 
                    </div>
                </div>
                <div className="overlaymenu-body">
                    <ul className="overlaymenu-kontainer-links">
                        <li className="overlaymenu-nav-item">
                            <a className="overlaymenu-nav-link " aria-current="page" href="#">Biz kimik?</a>
                        </li>
                        <li className="overlaymenu-nav-item">
                            <a className="overlaymenu-nav-link" href="#">Bağlarımız</a>
                        </li>
                        <li className="overlaymenu-nav-item">
                            <a className="overlaymenu-nav-link" href="#">Məhsullarımız</a>
                        </li>
                        <li className="overlaymenu-nav-item">
                            <a className="overlaymenu-nav-link" href="#">Xidmətlərimiz </a>
                        </li>
                        <li className="overlaymenu-nav-item">
                            <a className="overlaymenu-nav-link" href="#">Sosial məsuliyyət</a>
                        </li>
                        <li className="overlaymenu-nav-item">
                            <a className="overlaymenu-nav-link" href="#">Əlaqə</a>
                        </li>

                    </ul>
                </div>
            

        </>










        // <div className='offcanvars-kontainer'>


        //     <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        //         <div className="offcanvas-header">
        //             <div className="offcanvas-title offcanvas-logo" id="offcanvasExampleLabel"></div>
        //             <button onClick={handleCloseMenu} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //         </div>
        //         <div className="offcanvas-body">
        //             <ul className="offcanvas-kontainer-links">
        //                 <li className="offcanvas-nav-item">
        //                     <a className="offcanvas-nav-link " aria-current="page" href="#">Biz kimik?</a>
        //                 </li>
        //                 <li className="offcanvas-nav-item">
        //                     <a className="offcanvas-nav-link" href="#">Bağlarımız</a>
        //                 </li>
        //                 <li className="offcanvas-nav-item">
        //                     <a className="offcanvas-nav-link" href="#">Məhsullarımız</a>
        //                 </li>
        //                 <li className="offcanvas-nav-item">
        //                     <a className="offcanvas-nav-link" href="#">Xidmətlərimiz </a>
        //                 </li>
        //                 <li className="offcanvas-nav-item">
        //                     <a className="offcanvas-nav-link" href="#">Sosial məsuliyyət</a>
        //                 </li>
        //                 <li className="offcanvas-nav-item">
        //                     <a className="offcanvas-nav-link" href="#">Əlaqə</a>
        //                 </li>

        //             </ul>

        //         </div>
        //     </div>
        // </div>
    )
}

export default Offcanvas