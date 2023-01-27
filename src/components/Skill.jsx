import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
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

  const symbol = "/assets/symbol.svg";

  return (
    <div className="flex justify-between flex-col px-12 py-24 bg-silver md:px-40 md:py-32 lg:flex-row lg:py-10 xl:px-52">
      {/* text */}
      <div className="lg:self-center">
        <img src={symbol} alt="/" className="w-10 h-10 cursor-pointer"></img>
        <div>
          <p className="pb-3 font-heading text-palm text-5xl">
            <div className="pb-2">SKI</div>
            <div>LL.</div>
          </p>
          <p className="pb-2 font-heading text-2xl">
            A wide range of <i className="font-oblique">Web</i> technology<em>.</em>
          </p>
          <ul className="mt-4 text-xs xl:text-sm">
            <li>
              Proficient: Javascript | React | Tailwind CSS | Node | Express | MongoDB | PostgreSQL
            </li>
            <li>Knowledgeable: Typescript | Next.js | Redux | Python | REST API</li>
            <li>
              Tools: Git | GitHub | Figma | Postman | Photoshop | Illustrator | Indesign |
              Grasshopper
            </li>
          </ul>
        </div>
      </div>
      {/* iconcloud */}
      <div className="pt-4 justify-self-center">
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
      </div>
    </div>
  );
};

export default Skill;
