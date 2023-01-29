import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { ReactComponent as NavLogo } from "../image/logo.svg";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="">
      {/* Navbar */}
      <section>
        {/* icon for mobile */}
        <div onClick={handleNav} className="fixed z-30 flex justify-end w-full px-10 pt-14">
          <HiOutlineMenuAlt3
            size={40}
            className="lg:hidden top-5 text-white bg-palm border-palm rounded-full border-4"
          />
        </div>

        {/* icon for desktop */}
        <div
          onClick={handleNav}
          className="hidden lg:fixed lg:z-30 lg:flex lg:items-center lg:h-full lg:px-10"
        >
          <HiOutlineMenuAlt3 size={40} className="top-5" />
        </div>
      </section>

      {/* Menu tab */}
      <section
        className={
          nav
            ? "fixed z-50 left-0 top-0 w-full h-screen ease-in duration-500"
            : "fixed z-50 left-[-100%] top-0 w-full h-screen ease-in duration-500"
        }
      >
        <div className="flex relative h-screen">
          {/* tab content */}
          <div className="bg-silver grow-[5] pt-20 pb-8 pl-12 md:pl-20 md:pb-12 lg:pl-32 lg:pb-20 xl:pb-24">
            <div className="flex flex-col justify-between h-full">
              {/* close button */}
              <HiOutlineX size={40} onClick={handleNav} className="absolute top-1/2 left-10" />
              {/* tab top */}
              <div>
                <NavLogo className="w-10 h-10 fill-olive md:inline-block lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
                <ul className="grid gap-4 font-heading text-3xl pt-7 md:gap-5 lg:pt-9 lg:gap-6 lg:text-4xl xl:pt-10 xl:gap-7">
                  <li>
                    <Link to="#home" onClick={handleNav} smooth>
                      Home<span className="text-palm">.</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#about" onClick={handleNav} smooth>
                      About<span className="text-palm">.</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#skill" onClick={handleNav} smooth>
                      Skill<span className="text-palm">.</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#experience" onClick={handleNav} smooth>
                      Experience<span className="text-palm">.</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#project" onClick={handleNav} smooth>
                      Project<span className="text-palm">.</span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* tab bottom */}
              <div className="">
                <a href="mailto:mickmhtong@gmail.com">
                  <p className="font-oblique text-lg pb-1 md:text-xl lg:text-2xl">Contact me.</p>
                </a>
                <p>
                  <div className="font-heading">mickmhtong@gmail.com</div>
                  <div>
                    <a
                      href="https://github.com/michaelmhtong"
                      target="_blank"
                      className="underline"
                    >
                      github
                    </a>{" "}
                    | {}
                    <a
                      href="https://www.linkedin.com/in/mhtong/"
                      target="_blank"
                      className="underline"
                    >
                      linkedin
                    </a>
                  </div>
                </p>
                <p className="hidden md:block md:text-xs md:pt-3">
                  <div>© 2023 Michael Tong</div>
                  <div>Design in Figma</div>
                  <div>Build in React, Tailwind CSS and Framer Motion</div>
                </p>
              </div>
            </div>
          </div>

          {/* close tab */}
          <div
            onClick={handleNav}
            className="flex justify-center cursor-pointer bg-palm grow pt-20"
          >
            <HiOutlineX size={30} className="md:hidden" />
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
