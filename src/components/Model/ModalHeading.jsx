import React from "react";
import { easeIn, easeInOut, motion } from "framer-motion";
import { ReactComponent as Symbol } from "../../image/symbol.svg";

const ModalHeading = ({ title, subtitle, word }) => {
  const subtitleArray = subtitle.split("*");
  return (
    <div>
      <Symbol className="w-10 h-10 inline-block" fill="none" stroke="#a5ae9d" strokeWidth="8" />
      <motion.p
        initial={{ y: "200%", color: "#f2f2f2", opacity: 0 }}
        whileInView={{ y: 0, color: "#62973d", opacity: 1 }}
        transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }}
        className="pb-3 font-heading text-palm text-5xl xl:text-6xl"
      >
        <div className="pb-2">{title.toUpperCase().slice(0, 3)}</div>
        <div>{title.toUpperCase().slice(3)}.</div>
      </motion.p>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: easeInOut, duration: 1.5 }}
        className="pb-2 font-heading text-2xl xl:text-3xl"
      >
        {subtitleArray[0]}
        <i className="font-oblique">{word}</i>
        {subtitleArray[1]}
        <span className="text-palm">.</span>
      </motion.p>
    </div>
  );
};

export default ModalHeading;
