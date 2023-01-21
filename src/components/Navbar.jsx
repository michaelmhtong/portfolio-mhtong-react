import { useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const NavLogo = "/assets/logo.svg";
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="bg-[#62973D] sticky top-0 flex justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <div className="flex flex-row items-center">
          <SocialIcon url="https://github.com/michael07200" fgColor="white" bgColor="transparent" />

          <SocialIcon url="https://www.instagram.com/" fgColor="white" bgColor="transparent" />
        </div>
        {/* <Link to="/"> */}
        <img src={NavLogo} alt="/" className="w-10 h-10 cursor-pointer" />
        {/* </Link> */}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <div className="flex flex-row items-center cursor-pointer">
          <ul className="uppercase hidden md:flex text-sm text-white">
            {/* <Link to="/"> */}
            <li className="heroButton">Home</li>
            {/* </Link> */}
            {/* <Link to="/"> */}
            <li className="heroButton">About</li>
            {/* </Link> */}
            {/* <Link to="/"> */}
            <li className="heroButton">Experience</li>
            {/* </Link> */}
            {/* <Link to="/"> */}
            <li className="heroButton">Projects</li>
            {/* </Link> */}
            {/* <Link to="/"> */}
            <li className="heroButton">Contact</li>
            {/* </Link> */}
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden text-white">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
