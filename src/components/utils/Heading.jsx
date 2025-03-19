import React from 'react';

const Heading = ({children, className}) => {
    return <h2 className={`font-semibold text-[38px] leading-[132%] text-gray-900 ${className}`}>{children}</h2>;
};

export default Heading;