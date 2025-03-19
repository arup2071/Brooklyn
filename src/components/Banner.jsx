import React from 'react'
import PrimaryButton from './utils/PrimaryButton';
import ExperienceCard from './utils/ExperienceCard';

const Banner = () => {
  return (
    <section id="banner" className="mt-8 lg:mt-[126px]">
      <div className="container grid lg:grid-cols-2 items-center">
        <div className="bannerCnt order-last lg:order-first mt-4">
          <h1 className="font-semibold leading-[117%] text-[40px] lg:text-[72px] text-gray-900">
            Hello, I’m Brooklyn Gilbert
          </h1>
          <p className="text-lg leading-[133%] text-gray-600 my-6">
            I'm a Freelance{" "}
            <span className="text-gray-900">UI/UX Designer</span> and{" "}
            <span className="text-gray-900">Developer</span> based in London,
            England. I strives to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </p>
          <PrimaryButton className="hover:text-primary-500 hover:bg-transparent transition-colors duration-300 rounded-sm border border-color-primary-500">
            Say Hello!
          </PrimaryButton>

          <div className="experience grid lg:grid-cols-3 gap-2 mt-4 lg:mt-[142px]">
            <ExperienceCard counter={15} suffix={"Y."} title={"Experience"} />
            <ExperienceCard
              counter={250}
              suffix={"+"}
              title={"Project Completed"}
            />
            <ExperienceCard counter={58} suffix={""} title={"Happy Client"} />
          </div>
        </div>
        <div className="bannerImg order-first lg:order-last">
          <img
            src="/public/images/BannerImg.png"
            alt=""
            className="max-w-3/4 lg:max-w-full mx-auto lg:ms-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner
