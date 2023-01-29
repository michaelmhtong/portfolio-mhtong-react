import { useEffect } from "react";
import { easeIn, easeInOut, motion, useAnimationControls } from "framer-motion";
import { ReactComponent as Symbol } from "../../image/symbol.svg";

const ModalHeading = ({ title, subtitle, word }) => {
  const subtitleArray = subtitle.split("*");

  const svgAnimate = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1, transition: { ease: easeIn, duration: 1 } },
  };

  const svgPath = [
    "M12.9,10.5l12.5,21.6l12.4-21.6l12.5,21.6l12.5-21.6l12.4,21.6l12.5-21.6",
    "M83.6,17.6l18.8,10.8",
    "M100.2,32.1l12.5-21.6l12.4,21.6",
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.8, delay: 0.25 },
    },
  };

  const subAnimate = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: easeIn, duration: 0.5, delay: 1 } },
  };

  return (
    <motion.div initial="hidden" whileInView="visible" variants={container}>
      {/* svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 141.7 42.5"
        fill="none"
        stroke="#a5ae9d"
        strokeWidth="8"
        className="w-10 h-10 inline-block"
      >
        {svgPath.map((path, index) => (
          <motion.path key={index} variants={svgAnimate} d={path} />
        ))}
      </svg>

      {/* heading */}
      <p className="pb-3 font-heading text-palm text-5xl xl:text-6xl">
        <span className="overflow-hidden inline-block">
          <motion.span className="inline-block pb-2" variants={item}>
            {title.toUpperCase().slice(0, 3)}
          </motion.span>
        </span>
        <p></p>
        <span className="overflow-hidden inline-block">
          <motion.span className="inline-block pb-2" variants={item}>
            {title.toUpperCase().slice(3)}.
          </motion.span>
        </span>
      </p>

      {/* subheading */}
      <motion.p variants={subAnimate} className="pb-2 font-heading text-2xl xl:text-3xl">
        {subtitleArray[0]}
        <i className="font-oblique">{word}</i>
        {subtitleArray[1]}
        <span className="text-palm">.</span>
      </motion.p>
    </motion.div>
  );
};

export default ModalHeading;
