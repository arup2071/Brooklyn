import React from "react";
import Heading from "./Heading";
import Detail from "./Detail";

const UserCard = ({ userH, userD }) => {
  return (
    <div className="relative bg-white rounded-md p-6 sm:p-8 w-full max-w-[648px] overflow-hidden group transform transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
      {/* Left Side Accent Bar */}
      <div className="absolute top-0 left-0 w-1 bg-primary-500 h-0 transition-all duration-500 group-hover:h-full"></div>

      <Heading className="font-semibold !text-xl sm:text-2xl leading-[100%] text-gray-900">
        {userH}
      </Heading>
      <Detail className="font-normal text-sm sm:text-base leading-[150%] text-gray-700 pt-4">
        {userD}
      </Detail>
    </div>
  );
};

export default UserCard;
