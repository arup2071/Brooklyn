import React from 'react';

const PrimaryButton = ({children, url='#', className}) => {
    return (
        <a href={url} className={`btn ${className}`}>
           {children}
        </a>
    );
};

export default PrimaryButton;