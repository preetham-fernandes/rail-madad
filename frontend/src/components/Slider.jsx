import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Install modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

import slide_image_8 from './assets/swiper-images/img_8.jpg';
import slide_image_9 from './assets/swiper-images/img_9.jpg';
import slide_image_10 from './assets/swiper-images/img_10.jpg';
import slide_image_11 from './assets/swiper-images/img_11.jpg';
import slide_image_12 from './assets/swiper-images/img_12.jpg';
import slide_image_13 from './assets/swiper-images/img_13.jpg';
import slide_image_14 from './assets/swiper-images/img_14.jpg';

const Slider = () => {
  return (
    <div className="container">
    <h1 className="heading">Cleanliness Reviews</h1>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      {/* Card Slider */}
      <SwiperSlide>
        <div className="card card-positive">
          <img src={slide_image_8} alt="slide_image" className="card-image" />
          <div className="card-content">
            <h3 className="card-caption">Clean Railway Station</h3>
            <p className="card-review">Station was cleaned promptly after my complaint.</p>
            <p className="card-username">by John Doe</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card card-positive">
          <img src={slide_image_9} alt="slide_image" className="card-image" />
          <div className="card-content">
            <h3 className="card-caption">Clean Coach</h3>
            <p className="card-review">The coach was spotless after the cleaning team responded.</p>
            <p className="card-username">by Jane Smith</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card card-positive">
          <img src={slide_image_10} alt="slide_image" className="card-image" />
          <div className="card-content">
            <h3 className="card-caption">Impressed by the Cleaning</h3>
            <p className="card-review">The railway platform was sparkling clean within hours.</p>
            <p className="card-username">by Alice</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card card-positive">
          <img src={slide_image_11} alt="slide_image" className="card-image" />
          <div className="card-content">
            <h3 className="card-caption">Coach Cleaning</h3>
            <p className="card-review">Fast response, coach was cleaned and sanitized.</p>
            <p className="card-username">by Bob Lee</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card card-positive">
          <img src={slide_image_12} alt="slide_image" className="card-image" />
          <div className="card-content">
            <h3 className="card-caption">Platform Looks Great</h3>
            <p className="card-review">The platform cleaning service was very efficient.</p>
            <p className="card-username">by Preetham Fernandes</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card card-positive">
          <img src={slide_image_13} alt="slide_image" className="card-image" />
          <div className="card-content">
            <h3 className="card-caption">Excellent Cleanliness</h3>
            <p className="card-review">Timely cleaning after I filed a complaint!</p>
            <p className="card-username">by Shashank Tiwari</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card card-positive">
          <img src={slide_image_14} alt="slide_image" className="card-image" />
          <div className="card-content">
            <h3 className="card-caption">Fast and Clean</h3>
            <p className="card-review">The cleaning team did an outstanding job.</p>
            <p className="card-username">by Aadil</p>
          </div>
        </div>
      </SwiperSlide>

      {/* More slides can go here */}

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  )
}

export default Slider
