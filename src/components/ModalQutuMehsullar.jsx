import React, { useState } from 'react'
import './css/ModalQutuMehsullar.css'
import { HiOutlineXMark } from 'react-icons/hi2'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
//swiper navigation
import 'swiper/css/navigation';


const ModalQutuMehsullar = ({modalQutuClose, selectedProduct}) => {
    // const [modalItem, setModalItem]=useState(productArr)
    return (
        <div className='modalqutu-mehsullar-back' onClick={()=>{modalQutuClose(false)}}>
             
                    
            <div className='modalqutu-mehsullar py-2 px-2'>
               
                <div className="modalqutu-mehsullar-header">
                    <h1>{selectedProduct && selectedProduct.name}</h1>
                    <button onClick={()=>{modalQutuClose(false)}}><HiOutlineXMark className='modal-qutu-xmark' /></button>
                </div>
                <div className="modalqutu-mehsullar-body">
                    < div className="mehsullar-body-left">
                        <div className='mehsullar-body-left-img'><img src={selectedProduct && selectedProduct.image} alt="img" /></div>

                    </div>
                    <div className="mehsullar-body-right d-flex flex-column">
                        <span> </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, laborum atque? Enim, laudantium molestias. Nesciunt, molestiae! Soluta impedit, vitae iure enim, corrupti consequuntur quisquam, magnam est veritatis provident ratione aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, laborum atque? Enim, laudantium molestias. Nesciunt, molestiae! Soluta impedit, vitae iure enim, corrupti consequuntur quisquam, magnam est veritatis provident ratione aliquam?
                        </p>
                    </div>
                </div>

                <div className="modalqutu-mehsullar-footer">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                       
                        
                        {
                            selectedProduct && selectedProduct.productImages.map((img ,index) =>(

                                <SwiperSlide className='h-100' key={index}>
                                    <div className='mehsullar-swiper-div-img'>
                                        <img className='w-100' src={img} alt="" />
                                    </div></SwiperSlide>
                            ))
                        }
                           
                        
                            
                       
                    </Swiper>
                </div>
            </div>
                   
        </div>
    )
}

export default ModalQutuMehsullar