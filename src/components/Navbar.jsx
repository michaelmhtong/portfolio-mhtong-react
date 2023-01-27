import { useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const NavLogo = "/assets/logo.svg";
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="">
      {/* Navbar */}
      <section>
        {/* icon for mobile */}
        <div className="fixed z-30 flex justify-end w-full px-10 pt-14">
          <HiOutlineMenuAlt3
            size={40}
            className="md:hidden top-5 text-white bg-palm border-palm rounded-full border-4"
          />
        </div>

        {/* icon for desktop */}
        <div className="hidden lg:fixed lg:z-30 lg:flex lg:items-center lg:h-full lg:px-10">
          <HiOutlineMenuAlt3 size={40} className="top-5" />
        </div>
      </section>

      {/* Menu tab */}
      <section className="fixed z-50 left-0 top-0 w-full h-screen">
        <div className="flex relative h-screen">
          {/* tab content */}
          <div className="bg-silver grow-[5] pt-20 pl-12">
            <div className="flex flex-col">
              <img
                src={NavLogo}
                alt="/"
                className="w-10 h-10 fill-blue-500 cursor-pointer md:inline-block"
              />
              <ul className="grid gap-4 font-heading text-2xl pt-7">
                <li>
                  Home<span className="text-palm">.</span>
                </li>
                <li>
                  About<span className="text-palm">.</span>
                </li>
                <li>
                  Skill<span className="text-palm">.</span>
                </li>
                <li>
                  Experience<span className="text-palm">.</span>
                </li>
                <li>
                  Project<span className="text-palm">.</span>
                </li>
              </ul>
              <p className="">
                <div className="font-oblique text-lg pb-1">Contact me.</div>
                <div className="font-heading">mickmhtong@gmail.com</div>
                <div>github | linkedin</div>
              </p>
            </div>
          </div>

          {/* close tab */}
          <div className="flex justify-center bg-palm grow pt-20">
            <HiOutlineX size={30} className="" />
          </div>
        </div>
      </section>
    </header>
    // <header className="bg-[#62973D] sticky top-0 flex justify-between max-w-7xl mx-auto z-20 xl:items-center">
    //   <motion.div
    //     initial={{
    //       x: -500,
    //       opacity: 0,
    //       scale: 0.5,
    //     }}
    //     animate={{
    //       x: 0,
    //       opacity: 1,
    //       scale: 1,
    //     }}
    //     transition={{ duration: 1 }}
    //     className="flex flex-row items-center"
    //   >
    //     <div className="flex flex-row items-center">
    //       <SocialIcon url="https://github.com/michael07200" fgColor="white" bgColor="transparent" />

    //       <SocialIcon url="https://www.instagram.com/" fgColor="white" bgColor="transparent" />
    //     </div>
    //     {/* <Link to="/"> */}
    //     <img src={navLogo} alt="/" className="w-10 h-10 cursor-pointer" />
    //     {/* </Link> */}
    //   </motion.div>

    //   <motion.div
    //     initial={{
    //       x: 500,
    //       opacity: 0,
    //       scale: 0.5,
    //     }}
    //     animate={{
    //       x: 0,
    //       opacity: 1,
    //       scale: 1,
    //     }}
    //     transition={{ duration: 1 }}
    //     className="flex flex-row items-center"
    //   >
    //     <div className="flex flex-row items-center cursor-pointer">
    //       <ul className="uppercase hidden md:flex text-sm text-white">
    //         {/* <Link to="/"> */}
    //         <li className="heroButton">Home</li>
    //         {/* </Link> */}
    //         {/* <Link to="/"> */}
    //         <li className="heroButton">About</li>
    //         {/* </Link> */}
    //         {/* <Link to="/"> */}
    //         <li className="heroButton">Experience</li>
    //         {/* </Link> */}
    //         {/* <Link to="/"> */}
    //         <li className="heroButton">Projects</li>
    //         {/* </Link> */}
    //         {/* <Link to="/"> */}
    //         <li className="heroButton">Contact</li>
    //         {/* </Link> */}
    //       </ul>
    //       {/* Hamburger Icon */}
    //       <div onClick={handleNav} className="md:hidden text-white">
    //         <AiOutlineMenu size={25} />
    //       </div>
    //     </div>
    //   </motion.div>
    // </header>
  );
};

export default Navbar;
