import React from 'react';

const Detail = ({children, className}) => {
    return (
        <p className={`font-normal text-lg leading-[133%] text-gray-600 ${className}`}>
            {children}
        </p>
    );
};

export default Detail;