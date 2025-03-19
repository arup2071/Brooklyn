import React from "react";
import Detail from "./Detail";
import Heading from "./Heading";
import PrimaryButton from "./PrimaryButton";
import { FaArrowRightLong } from "react-icons/fa6";

const PortfolioCard = ({ thumbnail, title, detail, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col h-full overflow-hidden">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 object-cover"
      />

      <div className="p-6 flex flex-col flex-grow">
        <Detail className="font-medium text-sm text-gray-600 pb-1">
          {title}
        </Detail>
        <Heading className="font-semibold !text-lg text-gray-900 pb-3">
          {detail}
        </Heading>
        <Detail className="text-sm text-gray-700 pb-4 flex-grow">
          {description}
        </Detail>
        <div className="flex">
          <PrimaryButton className="max-w-[273px] !flex items-center gap-3 justify-center !bg-transparent !text-primary-500 border border-primary-500">
            Case Study <FaArrowRightLong />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
