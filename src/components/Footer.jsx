import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { ReactComponent as NavLogo } from "../image/logo.svg";
import { motion, useScroll } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ y: -200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <div className="px-14 py-6 bg-silver md:flex md:justify-between md:items-center md:py-12 lg:px-52 xl:px-[12%] 2xl:px-[14%] 3xl:px-[18%]">
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
              <a href="https://github.com/michaelmhtong" target="_blank" className="underline">
                github
              </a>{" "}
              | {}
              <a href="https://www.linkedin.com/in/mhtong/" target="_blank" className="underline">
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
    </motion.div>
  );
};

export default Footer;
