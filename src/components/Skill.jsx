import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import { easeInOut, motion } from "framer-motion";
import ModalHeading from "./ModalHeading";
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
      className="overflow-hidden flex justify-between flex-col px-12 pt-24 pb-12 bg-silver md:px-32 md:pt-32 lg:flex-row lg:py-10 xl:px-[12%] 2xl:px-[14%] 3xl:px-[18%]"
    >
      <div className="lg:self-center">
        {/* title */}
        <ModalHeading title="Skill" subtitle="A wide range of * technology" word="Web" />
        {/* content */}
        <motion.ul
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: easeInOut, duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-4 text-xs xl:text-sm 2xl:text-base"
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
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: easeInOut, duration: 2, delay: 1 }}
        viewport={{ once: true }}
        className="pt-4 justify-self-center lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl"
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
