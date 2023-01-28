import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { ReactComponent as NavLogo } from "../image/logo.svg";

const Footer = () => {
  return (
    <div className="px-14 py-6 bg-silver md:flex md:justify-between md:items-center md:py-12 lg:px-52">
      {/* left */}
      <a href="mailto:mickmhtong@gmail.com">
        <div className="hidden md:flex md:items-center">
          <HiArrowLongRight size={50} />
          <p className="pl-9">
            <div className="font-oblique text-base">Connect with me</div>
            <div className="font-heading text-3xl">MICHAEL TONG.</div>
          </p>
        </div>
      </a>

      {/* middle */}
      <div className="hidden lg:flex">
        <p className="lg:text-sm">
          <div className="font-heading">mickmhtong@gmail.com</div>
          <div className="font-body">
            <a href="https://github.com/michaelmhtong" className="underline">
              github
            </a>{" "}
            | {}
            <a href="https://www.linkedin.com/in/mhtong/" className="underline">
              linkedin
            </a>
          </div>
        </p>
      </div>

      {/* right */}
      <div className="md:text-right">
        <NavLogo className="w-10 h-10 fill-olive cursor-pointer md:inline-block" />
        <p className="text-xs font-body pt-1">
          <div>© 2023 Michael Tong</div>
          <div>Design in Figma</div>
          <div>Build in React, Tailwind CSS and Framer Motion</div>
        </p>
      </div>
    </div>
  );
};

export default Footer;
