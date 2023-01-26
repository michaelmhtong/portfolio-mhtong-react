import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const Footer = () => {
  const NavLogo = "/assets/logo.svg";
  return (
    <div className="px-14 py-6 bg-silver md:flex md:justify-between md:items-center md:py-12 lg:px-52">
      {/* left */}
      <div className="hidden md:flex md:items-center">
        <HiArrowLongRight size={50} />
        <p className="pl-9">
          <div className="font-oblique text-base">Interested ?</div>
          <div className="font-heading text-3xl">MICHAEL TONG.</div>
        </p>
      </div>

      {/* middle */}
      <div className="hidden lg:flex">
        <p className="lg:text-sm">
          <div className="font-heading">mickmhtong@gmail.com</div>
          <div className="font-body">github | linkedin</div>
        </p>
      </div>

      {/* right */}
      <div className="md:text-right">
        <img
          src={NavLogo}
          alt="/"
          className="w-10 h-10 fill-blue-500 cursor-pointer md:inline-block"
        />
        <p className="text-xs font-body pt-1">
          <div>© 2023 Michael Tong</div>
          <div>Built with React, Tailwind CSS and Framer Motion</div>
        </p>
      </div>
    </div>
  );
};

export default Footer;
