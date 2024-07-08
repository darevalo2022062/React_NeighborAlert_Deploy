import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Puedes usar cualquier ícono o imagen

const ImageGallery = ({ images }) => {
  return (
    <Swiper
    
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{
        type: 'fraction',
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} className="w-full h-96 object-cover rounded-2xl" alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};



export default ImageGallery;
