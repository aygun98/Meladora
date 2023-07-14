import React from 'react'
import './css/OffcanvasSearch.css'
import { BiSearchAlt } from 'react-icons/bi'
import {HiOutlineXMark} from 'react-icons/hi2'

const OffcanvasSearch = ({handleCloseSearch, searchmenucontainer}) => {
    return (
        <div className={searchmenucontainer}>

{/* <div className="seachmenu"> */}
    <div className='seachmenu-div'>
        <input  type="text" />

    <BiSearchAlt className='search-icon'/>
    </div>
    <button className='button-search-menu-xmark'   onClick={handleCloseSearch}>
    <HiOutlineXMark  className='search-menu-xmark'/>
        </button>

        </div>
    )
}

export default OffcanvasSearch