import React from "react";
import Heading from "./utils/Heading";
import Detail from "./utils/Detail";
import PrimaryButton from "./utils/PrimaryButton";
import UserCard from "./utils/UserCard";

const User = () => {
  return (
    <section className="bg-[#F0F1F3] pb-[100px] lg:pb-[150px] mt-10 lg:mt-0 py-8 pt-[100px] lg:pt-[150px]">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-[100px] items-center">
        {/* Left Content */}
        <div>
          <Heading className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
            What I Do?
          </Heading>
          <Detail className="pt-4 sm:pt-6 pb-4 text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </Detail>
          <Detail className="text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </Detail>
          <div className="pt-8 sm:pt-12">
            <PrimaryButton className="btn">Say Hello!</PrimaryButton>
          </div>
        </div>

        {/* Right Content - Cards */}
        <div className="grid gap-6 justify-center">
          <UserCard
            userH="User Experience (UX)"
            userD="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
          />
          <UserCard
            userH="User Interface (UI)"
            userD="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
          />
          <UserCard
            userH="Web Development"
            userD="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
          />
        </div>
      </div>
    </section>
  );
};

export default User;
