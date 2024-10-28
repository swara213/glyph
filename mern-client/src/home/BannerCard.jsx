// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
     <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/src/assets/banner-books/khaled.png" alt="Book 1" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/banner-books/cycle.png" alt="Book 2" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/banner-books/mortal.png" alt="Book 3" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/banner-books/hell.png" alt="Book 4" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/banner-books/husb.png" alt="Book 5" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/banner-books/verity.png" alt="Book 6" /></SwiperSlide>
        
        
        
      </Swiper>
    </div>
  )
}

export default BannerCard
