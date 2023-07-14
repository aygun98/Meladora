import React from 'react'
import './css/SectionXidmetler.css'
import SectionTitle from './SectionTitle'
import Xidmetcardjson from './XidmetlerCard.json'


const SectionXidmetler = () => {
    return (
        <div className='section-xidmetler '>
            <SectionTitle title='Xidmətlərimiz' />


            <div className="section-xidmetler-cards row justify-content-evenly px-1">
                {
                    Xidmetcardjson.map(detal => (
                        <div className="xidmetler-cards-card col-md-4" >
                            <div className='xidmetler-card-img'>
                                <img src={detal.cardimg} className="xidmetler-card-img-top" alt="..." />
                            </div>
                            <div className="xidmetler-cards-card-body py-3">
                                <h5 className="xidmetler-cards-card-title py-3">{detal.cardtitle}</h5>
                                <p className="xidmetler-cards-card-text">{detal.cardtext}</p>

                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default SectionXidmetler