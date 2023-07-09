import React from 'react'
import './css/SwiperFruits.css'
import SwiperFruitsjson from './swiperfruitsjs.json'



import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


const SwiperFruits = () => {
  return (
    <>
    <div className='swiper-conatiner'>
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
            slidesPerView: 1 ,
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
        className="mySwiper  mySwiper-fruits"
      >
        {
            SwiperFruitsjson.map(fruit=>(

                <SwiperSlide className='swiperlist' ><div className='container swiperlist-div' style={{backgroundColor: fruit.backgraund }}>
                  <span >{fruit.title}</span><img className='desing1' src={fruit.desing1} alt="" /> 
                  <img className='desing2' src={fruit.desing2} alt="" /></div>
                  </SwiperSlide>
            ))

        }
       
      </Swiper>
      </div>
      </>
  )
}

export default SwiperFruits