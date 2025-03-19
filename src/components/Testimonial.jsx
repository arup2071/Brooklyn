import React from "react";
import Heading from "./utils/Heading";
import Detail from "./utils/Detail";
import TestimonialPara from "./utils/TestimonialPara";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <section id="testimonial" className="pb-[80px] pt-[20px]">
      <div className="container">
        <Heading className="!text-5xl font-semibold text-center leading-[117%] pb-[24px]">
          Testimonial
        </Heading>
        <Detail className="font-normal !text-lg leading-[133%] text-center text-gray-400 pb-[70px]">
          There are many variations of passages of Lorem Ipsum available,
          <br /> but the majority have suffered alteration.
        </Detail>
      </div>

      {/* Swiper Wrapper with Proper Pagination Spacing */}
      <div className="p-3">
        <Swiper
          loop={true}
          speed={800} // Smoother transition speed
          modules={[Autoplay, Pagination]}
          pagination={{
            enabled: "true",
            clickable: true,
          }}
          slidesPerView={1}
          autoplay={{
            delay: 5500, // Slower autoplay for smoothness
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <TestimonialPara />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPara />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialPara />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
