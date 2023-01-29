import React from "react";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import { ReactComponent as NavLogo } from "../image/logo.svg";
import { HiArrowLongLeft } from "react-icons/hi2";
import { motion, easeInOut } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  const line1 = "Michael";
  const line2 = "Tong.";

  const sentenceAnimate = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const letterAnimate = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const arrowAnimate = {
    animation: {
      x: [0, 20, 0],
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: easeInOut,
      },
    },
  };

  return (
    <motion.div id="home" initial="hidden" animate="visible">
      <section className="flex relative h-screen justify-center align-middle">
        <div className="w-full bg-palm"></div>
        <div className="w-full bg-silver"></div>
        <motion.div
          variants={sentenceAnimate}
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-heading text-white text-6xl tracking-[0.2em] md:text-7xl md:tracking-[0.3em] lg:text-8xl xl:text-9xl 2xl:text-[8rem]"
        >
          <p>
            {line1
              .toUpperCase()
              .split("")
              .map((char, index) => (
                <motion.span key={index} variants={letterAnimate}>
                  {char}
                </motion.span>
              ))}
          </p>
          <p className="pt-2 md:pt-4 lg:pt-6 xl:pt-8">
            {line2
              .toUpperCase()
              .split("")
              .map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimate}
                  className={index === line2.length - 1 ? "text-palm" : ""}
                >
                  {char}
                </motion.span>
              ))}
          </p>
        </motion.div>
        {/* logo */}
        <NavLogo className="absolute h-11 top-14 left-10 fill-silver lg:h-14 lg:left-20 xl:h-16 xl:left-24" />
        {/* social */}
        <div className="hidden absolute md:flex flex-col h-full justify-center space-y-6 right-10 lg:right-16 lg:space-y-8 xl:right-20 xl:space-y-10">
          <a href="mailto:mickmhtong@gmail.com">
            <SiGmail size={20} />{" "}
          </a>
          <a href="https://github.com/michaelmhtong" target="_blank">
            <SiGithub size={20} />
          </a>{" "}
          <a href="https://www.linkedin.com/in/mhtong/" target="_blank">
            <SiLinkedin size={20} />
          </a>
        </div>
        {/* scroll text */}
        <div className="absolute rotate-[-90deg] bottom-8 mr-8 text-white text-[8px] md:text-[10px] md:bottom-9 md:mr-12 lg:bottom-12 lg:mr-14 lg:text-xs">
          <Link to="#skill" smooth>
            <motion.div
              variants={arrowAnimate}
              animate="animation"
              className="flex justify-center items-center"
            >
              <HiArrowLongLeft className="mr-2" />
              Scroll
            </motion.div>
          </Link>
        </div>
      </section>
      <section></section>
    </motion.div>
  );
};

export default Hero;
