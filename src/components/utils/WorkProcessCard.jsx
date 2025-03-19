import React from 'react';
import Detail from './Detail';
import Heading from './Heading';

const WorkProcessCard = ({icon, title, description}) => {
    return (
      <div className="bg-white p-8 rounded-xl">
        <img
          src={icon}
          alt=""
          className="max-w-[72px] max-h-[72px]"
        />
        <Heading className="mt-8 mb-3 !text-xl leading-[120%]">{title}</Heading>
        <Detail>
         {description}
        </Detail>
      </div>
    );
};

export default WorkProcessCard;