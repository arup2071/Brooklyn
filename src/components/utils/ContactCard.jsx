import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactCard = ({ Ques, Ans }) => {
  return (
    <div className="contactCard bg-transparent hover:bg-white rounded-[10px] grid grid-cols-[auto_1fr] items-center gap-[13px] p-6 w-[336px] transition-all duration-500 transform hover:scale-100 hover:shadow-xl group gap-y-3">
      {/* Icon */}
      <div className="w-12 h-12 text-2xl bg-primary-100 rounded-sm p-3 text-primary-500 grid place-items-center transition-colors duration-500 group-hover:bg-primary-500 group-hover:text-white">
        <HiOutlineLocationMarker />
      </div>

      {/* Content */}
      <div className="grid gap-1">
        <p className="text-sm text-gray-600">{Ques}</p>
        <h2 className="font-medium text-[16px] leading-[150%] text-gray-900">
          {Ans}
        </h2>
      </div>
    </div>
  );
};

export default ContactCard;
