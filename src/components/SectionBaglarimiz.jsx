import React from 'react'
import './css/SectionBaglarimiz.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionBags from "./sectionbaglarimizjs.json"



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const SectionBaglarimiz = () => {
    return (
        <div className='swiper-baglarimiz-container'>
      <h1 className='text-center'>Bağlarımız</h1>
      <div className='section-about-right-desing1 mb-5'></div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1040: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper  mySwiper-baglarimiz"
            >
                {
                    SectionBags.map(bag => (

                        <SwiperSlide className='baglarimiz-swiperlist' >
                            <div className={bag.klas}>
                            <div className={bag.klas2}>
                                <span>{bag.index}</span>
                                <h1>{bag.movzu}</h1>
                                <p>{bag.haqqinda}</p>

                            </div>
                            <div className='baglarimiz-swiperlist-bottom'>
                                <img src={bag.sekil} alt="" />

                            </div>
                            </div>
                        </SwiperSlide>
                    ))

                }

            </Swiper>
        </div>
    )
}

export default SectionBaglarimiz