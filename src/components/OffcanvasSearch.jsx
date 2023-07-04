import React from 'react'
import './css/OffcanvasSearch.css'
import { BiSearchAlt } from 'react-icons/bi'

const OffcanvasSearch = () => {
    return (
        <>


            <div className="  offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">

                    <button type="button" className="btn-close btn-close-top" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form className="  form-kontainer d-flex" role="search">
                        <input className="search-input form-control me-2" type="search" placeholder="Axtar" aria-label="Search" />
                        <BiSearchAlt className='searchimg' />

                    </form>
                  
                </div>
            </div>
        </>
    )
}

export default OffcanvasSearch