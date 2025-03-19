import React from "react";
import Detail from "./utils/Detail";

const Footer = () => {
  const menuLinks = [
    {
      title: "Home",
      url: "#",
    },
    {
      title: "About",
      url: "#",
    },
    {
      title: "Process",
      url: "#",
    },
    {
      title: "Portfolio",
      url: "#",
    },
    {
      title: "Blog",
      url: "#",
    },
    {
      title: "Services",
      url: "#",
    },
    {
      title: "Contact",
      url: "#",
    },
  ];

  return (
    <section className="bg-gray-800 pt-[192px] -translate-y-[80px] overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 md:gap-16 lg:gap-[182px] pb-[86px] text-center md:text-left">
        {/* Logo Section */}
        <div className="logo flex justify-center md:justify-start">
          <a href="#">
            <img
              src="/public/images/FooterLogo.png"
              alt=""
              className="max-w-[150px] md:max-w-[180px] lg:max-w-full"
            />
          </a>
        </div>

        {/* Menu Links */}
        <div className="footerCnt ml-0 md:ml-5 lg:w-[551px]">
          <ul className="flex flex-wrap justify-center md:justify-start gap-3">
            {menuLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="font-medium leading-[150%] my-2 inline-block text-[16px] text-gray-300 hover:text-white transition"
                  href={link.url}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="copyright flex justify-center md:justify-end">
          <Detail className="text-gray-white text-[16px] leading-[150%]">
            Copyright © 2022 Picto.
          </Detail>
        </div>
      </div>
    </section>
  );
};

export default Footer;
