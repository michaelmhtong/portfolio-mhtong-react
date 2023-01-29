import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import { ReactComponent as NavLogo } from "../image/logo.svg";
import { HiArrowLongLeft } from "react-icons/hi2";
import { motion, easeInOut } from "framer-motion";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "an Architect",
      "a Software Engineer",
      "a Front-end Developer",
      "a Full-stack Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

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
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-heading text-white text-5xl tracking-[0.3em] md:text-6xl lg:text-7xl xl:text-8xl"
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
          <motion.div
            variants={arrowAnimate}
            animate="animation"
            className="flex justify-center items-center"
          >
            <HiArrowLongLeft className="mr-2" />
            Scroll
          </motion.div>
        </div>
      </section>
      <section></section>
    </motion.div>
    // <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center">
    //   <h1></h1>
    //   <div>
    //     <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
    //       I am Michael Tong
    //     </h1>
    //     <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
    //       I am {text}
    //       <Cursor cursorColor="#62973D" />
    //     </p>
    //     <div className="mt-8 flex gap-x-4 sm:justify-center">
    //       <a
    //         href="#"
    //         className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
    //       >
    //         Get started{" "}
    //         <span className="text-indigo-200" aria-hidden="true">
    //           &rarr;
    //         </span>
    //       </a>
    //       <a
    //         href="#"
    //         className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
    //       >
    //         Live demo{" "}
    //         <span className="text-gray-400" aria-hidden="true">
    //           &rarr;
    //         </span>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
    //     <svg
    //       className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
    //       viewBox="0 0 1155 678"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
    //         fillOpacity=".3"
    //         d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
    //       />
    //       <defs>
    //         <linearGradient
    //           id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
    //           x1="1155.49"
    //           x2="-78.208"
    //           y1=".177"
    //           y2="474.645"
    //           gradientUnits="userSpaceOnUse"
    //         >
    //           <stop stopColor="#9089FC" />
    //           <stop offset={1} stopColor="#FF80B5" />
    //         </linearGradient>
    //       </defs>
    //     </svg>
    //   </div>
    // </div>
  );
};

export default Hero;
