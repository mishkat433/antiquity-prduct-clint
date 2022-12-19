import React from 'react';
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import pic1 from "../../../Assets/image1.jpg"
import pic2 from "../../../Assets/image2.jpg"

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
                        <div className='banner-content'>
                            <h1>The New Antiquity <br /> Research Association</h1>
                            <p>Our semiannual meetings provide an opportunity for sharing research on a wide array of subjects.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner-bg'>
                        <img className='banner-img' src={pic2} alt="" />
                        <div className='banner-content'>
                            <h1>The New Antiquity <br /> Research Association</h1>
                            <p>Our semiannual meetings provide an opportunity for sharing research on a wide array of subjects.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='banner-bg'>
                        <img className='banner-img' src={pic1} alt="" />
                        <div className='banner-content'>
                            <h1>The New Antiquity <br /> Research Association</h1>
                            <p>Our semiannual meetings provide an opportunity for sharing research on a wide array of subjects.</p>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;