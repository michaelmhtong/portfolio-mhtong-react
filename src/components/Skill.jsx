import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import { easeIn, easeInOut, motion } from "framer-motion";
import {
  siJavascript,
  siReact,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siMongodb,
  siPostgresql,
  siTypescript,
  siNextdotjs,
  siRedux,
  siPython,
  siGit,
  siGithub,
  siFigma,
  siPostman,
  siAdobephotoshop,
  siAdobeillustrator,
  siAdobeindesign,
  siRhinoceros,
} from "simple-icons";
import ModalHeading from "./model/ModalHeading";

const Skill = () => {
  const icons = [
    siJavascript,
    siReact,
    siTailwindcss,
    siNodedotjs,
    siExpress,
    siMongodb,
    siPostgresql,
    siTypescript,
    siNextdotjs,
    siRedux,
    siPython,
    siGit,
    siGithub,
    siFigma,
    siPostman,
    siAdobephotoshop,
    siAdobeillustrator,
    siAdobeindesign,
    siRhinoceros,
  ].map((icon) => {
    return renderSimpleIcon({
      icon,
      size: 60,
    });
  });

  return (
    <div
      id="skill"
      className="flex justify-between flex-col px-12 pt-24 pb-12 bg-silver md:px-32 md:pt-32 lg:flex-row lg:py-10 xl:px-64"
    >
      {/* title */}
      <div className="lg:self-center">
        {/* symbol */}
        {/* <svg
          width="10"
          height="500"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#a5ae9d"
          strokeWidth="8"
        >
          <path
            d="M12.9,10.5l12.5,21.6l12.4-21.6l12.5,21.6l12.5-21.6l12.4,21.6l12.5-21.6 M100.2,32.1l12.5-21.6l12.4,21.6
	 M83.6,17.6l18.8,10.8"
            stroke="#a5ae9d"
            strokeWidth="8"
          />
        </svg> */}
        {/* <div>
          <Symbol className="w-10 h-10" fill="none" stroke="#a5ae9d" strokeWidth="8" />
          <motion.p
            initial={{ y: "200%", color: "#f2f2f2", opacity: 0 }}
            whileInView={{ y: 0, color: "#62973d", opacity: 1 }}
            transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }}
            className="pb-3 font-heading text-palm text-5xl xl:text-6xl"
          >
            <div className="pb-2">SKI</div>
            <div>LL.</div>
          </motion.p>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: easeInOut, duration: 1.5 }}
            className="pb-2 font-heading text-2xl xl:text-3xl"
          >
            A wide range of <i className="font-oblique">Web</i> technology
            <span className="text-palm">.</span>
          </motion.p>
        </div> */}
        <ModalHeading title="Skill" subtitle="A wide range of * technology" word="Web"/>
        <motion.ul
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: easeInOut, duration: 2 }}
          className="mt-4 text-xs xl:text-sm"
        >
          <li>
            Proficient: Javascript | React | Tailwind CSS | Node | Express | MongoDB | PostgreSQL
          </li>
          <li>Knowledgeable: Typescript | Next.js | Redux | Python | REST API</li>
          <li>
            Tools: Git | GitHub | Figma | Postman | Photoshop | Illustrator | Indesign | Grasshopper
          </li>
        </motion.ul>
      </div>
      {/* iconcloud */}
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: easeInOut, duration: 3 }}
        className="pt-4 justify-self-center"
      >
        <Cloud
          containerProps={{
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "none",
            },
            onClick: (event) => event.preventDefault(),
          }}
          options={{
            clickToFront: 500,
            depth: 1,
            initial: [0.1, -0.1],
            outlineColour: "#0000",
            wheelZoom: false,
          }}
        >
          {icons}
        </Cloud>
      </motion.div>
    </div>
  );
};

export default Skill;
