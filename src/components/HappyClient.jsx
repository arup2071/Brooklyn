import React from "react";
import Heading from "./utils/Heading";
import Detail from "./utils/Detail";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Autoplay } from "swiper/modules";
const HappyClient = () => {
  const Social = [
    { id: 1, image: "public/images/GoogleIcons.png" },
    { id: 2, image: "public/images/DribbbleIcons.png" },
    { id: 3, image: "public/images/LinkedIn.png" },
    { id: 4, image: "public/images/amazon.png" },
    { id: 5, image: "public/images/medium.png" },
    { id: 6, image: "public/images/spotify.png" },
  ];

  return (
    <section id="HappyClient" className="bg-gray-50">
      <div className="container text-center pt-[100px]">
        <Heading className="pb-[24px]">Happy Clients</Heading>
        <Detail className="pb-[24px]">
          There are many variations of passages of Lorem Ipsum available,
          <br /> but the majority have suffered alteration.
        </Detail>
        <div className="pb-[100px]">
          <Swiper
            loop={true}
            centeredSlides={true}
            speed={300} // Smoother transition speed
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={10}
            autoplay={{
              delay: 3500, // Slower autoplay for smoothness
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {Social.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt="Client Logo" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HappyClient;
