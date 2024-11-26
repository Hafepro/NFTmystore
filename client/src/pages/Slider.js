import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation]);

const Slider = () => {
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/400",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    console.log("currentIndex", currentIndex)
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div>
      <Swiper navigation={true} slidesPerView={1}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={`https://picsum.photos/200/300 ${currentIndex}`} alt={`Slide ${currentIndex}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Slider;