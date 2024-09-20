import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import slide_image_8 from './assets/swiper-images/img_8.jpg';
import slide_image_9 from './assets/swiper-images/img_9.jpg';
import slide_image_10 from './assets/swiper-images/img_10.webp';
import slide_image_11 from './assets/swiper-images/img_11.jpg';
import slide_image_12 from './assets/swiper-images/img_12.jpg';
import slide_image_13 from './assets/swiper-images/img_13.jpg';
import slide_image_14 from './assets/swiper-images/img_14.jpg';

import service_icon_1 from './assets/icons/service_1.png'; 
import service_icon_2 from './assets/icons/service_2.png';
import service_icon_3 from './assets/icons/service_3.png';
import service_icon_4 from './assets/icons/service_4.png';
import service_icon_5 from './assets/icons/service_5.png';
import service_icon_6 from './assets/icons/service_6.png';
import service_icon_7 from './assets/icons/service_7.png';
import service_icon_8 from './assets/icons/service_8.png';

import icon from './assets/icons/open.png';

const RightColumn = () => {
  return (
    <div className="container mx-auto max-w-full">
      <h2 className="text-center text-3xl text-white font-navbar font-bold ">Our Reviews</h2>
      {/* Swiper Section */}
      <div className="swiper-section">
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
          autoplay={{
            delay: 2000,  // Automatically slide after 3 seconds
            disableOnInteraction: false,  // Continue autoplay after user interaction
            pauseOnMouseEnter: true, // Pauses autoplay when the user hovers
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="swiper_container mt-3"
        >
          {/* Swiper Slides */}
          <SwiperSlide>
            <div className="card card-positive">
              <img src={slide_image_8} alt="Clean Railway Station" className="card-image w-20 h-20 object-cover" />
              <div className="card-content">
                <img src={icon} className='icon' alt="Icon" />
                <h3 className="card-caption text-sm">Clean Railway Station</h3>
                <p className="card-review text-xs">
                  The station was promptly cleaned, significantly improving the waiting area’s cleanliness and overall experience.
                </p>
                <p className="card-username text-xs">by Prof. Roshni </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card card-positive">
              <img src={slide_image_10} alt="Clean Coach" className="card-image w-20 h-20 object-cover" />
              <div className="card-content">
                <img src={icon} className='icon' alt="Icon" />
                <h3 className="card-caption text-sm">Clean Coach</h3>
                <p className="card-review text-xs">
                  The coach was quickly and thoroughly cleaned, providing a comfortable and hygienic environment for passengers.
                </p>
                <p className="card-username text-xs">by Saad Siddique</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card card-positive">
              <img src={slide_image_9} alt="Impressed by the Cleaning" className="card-image w-20 h-20 object-cover" />
              <div className="card-content">
                <img src={icon} className='icon' alt="Icon" />
                <h3 className="card-caption text-sm">Impressed by the Cleaning</h3>
                <p className="card-review text-xs">
                  The platform was sparkling clean within hours, showcasing exceptional efficiency and attention to detail.
                </p>
                <p className="card-username text-xs">by Harshada Gawas</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card card-positive">
              <img src={slide_image_11} alt="Coach Cleaning" className="card-image w-20 h-20 object-cover" />
              <div className="card-content">
                <img src={icon} className='icon' alt="Icon" />
                <h3 className="card-caption text-sm">Coach Cleaning</h3>
                <p className="card-review text-xs">
                  Fast response ensured the coach was cleaned and sanitized, creating a pleasant and hygienic travel environment.
                </p>
                <p className="card-username text-xs">by Sakshi Kupekar</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card card-positive">
              <img src={slide_image_12} alt="Platform Looks Great" className="card-image w-20 h-20 object-cover" />
              <div className="card-content">
                <img src={icon} className='icon' alt="Icon" />
                <h3 className="card-caption text-sm">Platform Looks Great</h3>
                <p className="card-review text-xs">
                  The platform was efficiently cleaned, significantly enhancing its appearance and making it more pleasant for travelers.
                </p>
                <p className="card-username text-xs">by Preetham Fernandes</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card card-positive">
              <img src={slide_image_13} alt="Excellent Cleanliness" className="card-image w-20 h-20 object-cover" />
              <div className="card-content">
                <img src={icon} className='icon' alt="Icon" />
                <h3 className="card-caption text-sm">Excellent Cleanliness</h3>
                <p className="card-review text-xs">
                  Timely and thorough cleaning after the complaint, making the station look pristine and ensuring a positive experience.
                </p>
                <p className="card-username text-xs">by Shashank Tiwari</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card card-positive">
              <img src={slide_image_14} alt="Fast and Clean" className="card-image w-20 h-20 object-cover" />
              <div className="card-content">
                <img src={icon} className='icon' alt="Icon" />
                <h3 className="card-caption text-sm">Fast and Clean</h3>
                <p className="card-review text-xs">
                  Outstanding job by the cleaning team with a swift response, ensuring a clean and welcoming environment.
                </p>
                <p className="card-username text-xs">by Aadil Attar</p>
              </div>
            </div>
          </SwiperSlide>

          {/* More SwiperSlides can be added similarly */}
        </Swiper>
      </div>

      {/* Services Section */}
      <div className="services-section my-20">
        <h2 className="text-center text-lg text-white font-semibold">Have you not found the right one?</h2>
        <p className="text-center text-white mb-4">Find a service suitable for you</p>
        <div className="services-grid">
          <div className="service-item">
            <img src={service_icon_1} alt="Ticket Booking" className="service-icon" />
            <p>Ticket Booking</p>
          </div>
          <div className="service-item">
            <img src={service_icon_2} alt="Train Enquiry" className="service-icon" />
            <p>Train Enquiry</p>
          </div>
          <div className="service-item">
            <img src={service_icon_3} alt="Reservation Enquiry" className="service-icon" />
            <p>Reservation Enquiry</p>
          </div>
          <div className="service-item">
            <img src={service_icon_4} alt="Retiring Room Booking" className="service-icon" />
            <p>Retiring Room Booking</p>
          </div>
          <div className="service-item">
            <img src={service_icon_5} alt="Indian Railways" className="service-icon" />
            <p>Indian Railways</p>
          </div>
          <div className="service-item">
            <img src={service_icon_6} alt="UTS Ticketing" className="service-icon" />
            <p>UTS Ticketing</p>
          </div>
          <div className="service-item">
            <img src={service_icon_7} alt="Freight Business" className="service-icon" />
            <p>Freight Business</p>
          </div>
          <div className="service-item">
            <img src={service_icon_8} alt="Railway Parcel Website" className="service-icon" />
            <p>Railway Parcel Website</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#6b0f24] text-white w-full py-4 px-6">
        <div className="footer-container mx-0 px-0 w-full flex justify-between items-center text-sm">
          <div>
            <p>Copyright ©2019 RAILMADAD. All Rights Reserved.</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><h2>Home</h2></li>
              <li><h2>FAQs</h2></li>
              <li><h2>Railway Admin Login</h2></li>
              <li><h2>MIS Report Login</h2></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default RightColumn;
