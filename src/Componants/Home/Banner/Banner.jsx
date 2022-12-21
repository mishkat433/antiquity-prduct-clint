import React from 'react';
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import pic1 from "../../../Assets/image1.jpg";
import pic2 from "../../../Assets/image2.jpg";
import pic3 from "../../../Assets/image3.jpg";


const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='banner-bg'>
                        <img className='banner-img' src={pic1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner-bg'>
                        <img className='banner-img' src={pic2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner-bg'>
                        <img className='banner-img' src={pic3} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;