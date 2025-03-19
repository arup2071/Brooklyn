import React from 'react'
import Heading from './utils/Heading'
import Detail from './utils/Detail';
import PrimaryButton from './utils/PrimaryButton';
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectIdea = () => {
  return (
    <section className=" bg-gray-900 w-[100%]">
      <div className="container">
        <Heading className="text-center font-semibold leading-[117%] text-5xl text-gray-white pt-[100px]">
          Do you have Project Idea? Let's discuss your project!
        </Heading>
        <Detail className="font-normal text-lg text-center leading-[133%] text-gray-300 pt-8 mb-8">
          There are many variations of passages of Lorem Ipsum available,
          <br /> but the majority have suffered alteration.
        </Detail>
        <div className="text-center !flex items-center justify-center">
          <PrimaryButton className="btn !flex items-center max-w-[240px] gap-3 mb-[100px]">
            Let’s work Together <FaArrowRightLong />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default ProjectIdea
