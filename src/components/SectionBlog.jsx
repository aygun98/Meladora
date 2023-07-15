import React from 'react'
import './css/SectionBlog.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from './SectionTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Blogdata from './SectionBlogjson.json'
//
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const SectionBlog = () => {
    return (
        <div className='section-blog-container container' >
            <SectionTitle title='Bloglar' />
            <div className='section-blog'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        250: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        991: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1238: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }

                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper "
                >


                    {
                        Blogdata.map(blogcard => (
                            <SwiperSlide className='blog-swiper-slide'>
                                <div className="blog-card " >
                                    <div className='blog-card-img-container'>
                                        <img src={blogcard.blogimg} className="blog-card-img-top" alt="..." />
                                    </div>
                                    <div className="-blog-card-body py-4">
                                        <h2 className="blog-card-title text-center pb-3">{blogcard.blogtitle}</h2>
                                        <p className="blog-card-text text-center">{blogcard.blogtext}</p>

                                    </div>

                                </div>
                            </SwiperSlide>
                        ))
                    }



                </Swiper>
            </div>
        </div>
    )
}

export default SectionBlog