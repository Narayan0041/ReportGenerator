import React, { useRef, useState } from 'react';
// Import Swiper React components
// import "./components/AdSection/AdSlidetStyle.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AdsDataList } from './AdSectionDataList';
import AdSectionCard from './AdSection';

export default function AdSliderSection({ Image }) {
    let ArrayOfImage = AdsDataList.Ads.Data
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >{
                    ArrayOfImage.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <AdSectionCard image={item.image} />
                            </SwiperSlide>
                        )
                    })
                }
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
