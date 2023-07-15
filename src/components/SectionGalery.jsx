import React from 'react'
import './css/SectionGalery.css'
import SectionTitle from './SectionTitle'
import SectionGaleryjson from './SectionGaleryjson.json'
import { BiSearchAlt } from 'react-icons/bi'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});


const SectionGalery = () => {
    return (
        <div className='section-galery container'>
            <SectionTitle title='Qalereya' />
            <div className='section-galery-container d-flex  flex-wrap justify-content-center'>
                {
                    SectionGaleryjson.map(img => (

                        <div className='section-galery-img-div'><div className='section-galery-img w-100  h-100'>
                            <img className='w-100 h-100' src={img.galeryImg} alt="" /></div>
                            <div className='section-galery-img-hover'>
                                <a href={img.galeryImg} data-fancybox='gallery'>
                                    <BiSearchAlt className='section-galery-img-hover-search-icon' />
                                </a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default SectionGalery