import React from "react";
import BlogCard from "./utils/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Heading from "./utils/Heading";
import Detail from "./utils/Detail";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      meta: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/BlogImg1.png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      meta: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/BlogImg2.png",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      meta: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/BlogImg3.png",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      meta: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/BlogImg4.png",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      meta: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/BlogImg1.png",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      meta: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/BlogImg2.png",
    },
  ];
  return (
    <section
      id="blogs"
      className="bg-linear-to-tl from-[#d4eaee] via-white to-[#f5e3ff]"
    >
      <div className="container lg:pt-[132px] md:pt-[100px] sm:pt-[50px] lg:pb-[133.56px] md:pb-[90px] sm:pb-[40px]">
        <div className="text-center pt-[22px]">
          <Heading className="">Blog</Heading>
          <Detail className="pb-[65px] pt-[22px]">
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration.
          </Detail>
        </div>
        <Swiper
          loop={true}
          modules={[Autoplay, Pagination]}
          pagination={{
            enabled: true,
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          spaceBetween={24}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          {blogs.map((item) => (
            <SwiperSlide key={item.id}>
              <BlogCard blog={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
