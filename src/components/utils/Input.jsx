import React from 'react'

const Input = ({type = 'text', name, placeholder, className}) => {
  return (
    <input
      type={type}
      name={name}
      className={`w-full border-b border-gray-100 text-gray-500 text-lg leading-[133%] h-[38px] outline-0 focus:border-primary-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:text-primary-500 my-3 ${className}`}
      placeholder={placeholder}
    />
  );
}

export default Input
