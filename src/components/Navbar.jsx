import React, { useState } from 'react';
import PrimaryButton from './utils/PrimaryButton';
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2} from "react-icons/rx";

const Navbar = () => {

    const menuLinks = [
        {
            title: 'Home',
            url: '#',
        },
        {
            title: 'About',
            url: '#',
        },
        {
            title: 'Process',
            url: '#',
        },
        {
            title: 'Portfolio',
            url: '#',
        },
        {
            title: 'Blog',
            url: '#',
        },
        {
            title: 'Services',
            url: '#',
        },

    ]


    const [active, setActive] =useState(false)

    const handleCloseSidebar = (e) => {
      if (e.target.classList.contains("menu")) {
        setActive(false);
      }
    };



    return (
      <nav className="py-5">
        <div className="container grid grid-cols-2 lg:grid-cols-3 items-center">
          <div className="logo">
            <a href="#">
              <img
                src="/public/images/Logo.png"
                alt=""
                className="max-w-full"
              />
            </a>
          </div>

          {/* MENU */}
          <div
            className={`menu ${
              !active ? "invisible opacity-0" : "visible opacity-100"
            } transition-all duration-300 lg:visible lg:opacity-100 col-span-2 fixed lg:static bg-gray-700/50 lg:bg-transparent inset-0`}
            onClick={handleCloseSidebar}
          >
            <ul
              className={`${
                !active ? "scale-x-0" : ""
              } origin-left lg:scale-x-100 transition-all duration-500 lg:flex justify-end items-center relative gap-12 bg-gray-white h-full lg:h-auto max-w-3/4 lg:max-w-full p-8 lg:p-0`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="closeBtn absolute right-8 lg:hidden text-4xl text-red-600"
                onClick={() => setActive(false)}
              >
                <RxCross2 />
              </button>
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="font-medium leading-[150%] text-[#333] my-4 inline-block"
                    href={link.url}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li>
                <PrimaryButton url="#">Contact</PrimaryButton>
              </li>
            </ul>
          </div>

          {/* Menu Icon */}
          <div className="icon text-end lg:hidden">
            <button
              className="text-3xl cursor-pointer"
              onClick={() => setActive(true)}
            >
              <RiMenu3Line />
            </button>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;