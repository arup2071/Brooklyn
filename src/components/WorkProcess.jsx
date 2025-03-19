import React from "react";
import Heading from "./utils/Heading";
import Detail from "./utils/Detail";
import WorkProcessCard from "./utils/WorkProcessCard";

const WorkProcess = () => {
  return (
    <section
      id="workProcess"
      className="bg-[#F0F1F3] lg:pb-[140px] mt-10 lg:mt-0 py-8 lg:pt-[248px] lg:-translate-y-[70px]"
    >
      <div className="container grid lg:grid-cols-2 gap-8 lg:gap-[143px] items-center">
        <div className="workProcessCnt">
          <Heading className="text-5xl">Work Process</Heading>
          <Detail className="pt-6 pb-4">
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences.
          </Detail>
          <Detail>
            I design and develop services for customers specializing creating
            stylish, modern websites, web services.
          </Detail>
        </div>
        <div className="workProcessCards grid md:grid-cols-2 gap-6 items-center">
          <div className="firstRow grid gap-6">
            <WorkProcessCard
              icon="/public/images/workResearch.png"
              title="1. Research"
              description="I research and analyze the customer's needs and goals."
            />
            <WorkProcessCard
              icon="/public/images/workDesign.png"
              title="3. Design"
              description="I design and develop services for customers."
            />
          </div>
          <div className="lastRow grid gap-6 md: mt-10">
            <WorkProcessCard
              icon="/public/images/workAnalyze.png"
              title="2. Analyze"
              description="I analyze the customer's needs and goals."
            />
            <WorkProcessCard
              icon="/public/images/workLaunch.png"
              title="4. Launch"
              description="I launch the final product to the customer."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
