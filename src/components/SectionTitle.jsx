import React from 'react'
import './css/SectionTitle.css'

const SectionTitle = ({title}) => {
  return (
    <div className='section-title-container'>
        <h1 className="section-title-text text-center">{title}</h1>
        <div className="section-title-desing text-center"></div>
    </div>
  )
}

export default SectionTitle