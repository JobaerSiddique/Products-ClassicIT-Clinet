import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./Banner.css"
import img1 from "../../image/cover1.jpg"
import img2 from "../../image/tee6.jpg"
import img3 from "../../image/Round-Neck-Men-T-Shirt-Mockup-1.jpg"
import img4 from "../../image/a0742d83892471.5d4a82344f1e0.jpg"
import img5 from "../../image/ezgif.com-avif-to-jpg-converted.jpg"
import img6 from "../../image/images (1).jpeg"


const BannerCarousel = () => {
    return (
        <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
       
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
        </SwiperSlide>
        
        
        
      </Swiper>
    </>
    );
};

export default BannerCarousel;