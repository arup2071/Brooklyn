import React from "react";
import Heading from "./utils/Heading";
import Detail from "./utils/Detail";
import PortfolioCard from "./utils/PortfolioCard";
import PrimaryButton from "./utils/PrimaryButton";

const Portfolio = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <Heading>
          <h2 className="text-center font-semibold text-4xl md:text-5xl text-gray-900 leading-tight mt-16 lg:mb-6 mb-3">
            Portfolio
          </h2>
        </Heading>
        <Detail>
          <p className="text-center pt-6 md:text-lg">
            There are many variations of passages of Lorem Ipsum available,{" "}
            <br />
            but the majority have suffered alteration.
          </p>
        </Detail>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <PortfolioCard
            thumbnail="public/images/PortfolioImg-1.png"
            title="UI-UX DESIGN"
            detail="Product Admin Dashboard"
            description="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
          />
          <PortfolioCard
            thumbnail="public/images/PortfolioImg-2.png"
            title="UI-UX DESIGN"
            detail="Product Admin Dashboard"
            description="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
          />
          <PortfolioCard
            thumbnail="public/images/PortfolioImg-3.png"
            title="UI-UX DESIGN"
            detail="Product Admin Dashboard"
            description="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
          />
          <PortfolioCard
            thumbnail="public/images/PortfolioImg-4.png"
            title="UI-UX DESIGN"
            detail="Product Admin Dashboard"
            description="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
          />
          <PortfolioCard
            thumbnail="public/images/PortfolioImg-5.png"
            title="UI-UX DESIGN"
            detail="Product Admin Dashboard"
            description="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
          />
          <PortfolioCard
            thumbnail="public/images/PortfolioImg-6.png"
            title="UI-UX DESIGN"
            detail="Product Admin Dashboard"
            description="Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus."
          />
        </div>
        <div className="text-center mt-12 pb-[100px]">
          <PrimaryButton className="text-center mx-auto ">
            More Project
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
