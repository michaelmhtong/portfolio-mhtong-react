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
    <div className="px-12">
      {/* text */}
      <div>
        <img src={symbol} alt="/" className="w-10 h-10 cursor-pointer"></img>
        <div>
          <p className="pb-3 font-heading text-palm text-5xl">
            <div className="pb-2">SKI</div>
            <div>LL.</div>
          </p>
          <p className="pb-2 font-heading text-2xl">
            A wide range of <i className="font-oblique">Web</i> technology<em>.</em>
          </p>
          <ul className="mt-4 text-xs">
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
      <div className="pt-4">
        <Cloud>{icons}</Cloud>
      </div>
    </div>

    // <div className="relative bg-white pt-16 pb-32 overflow-hidden">
    //   <div>
    //     <div className="relative">
    //       <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 lg: items-center">
    //         <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
    //           <div>
    //             <div className="mt-6">
    //               <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Skills</h2>
    //               {/* As a front-end developer, I have a foundation in web development and am familiar
    //                 with a range of languages and frameworks, especially in Javascript and React,
    //                 which allow me to create interactive and responsive user interfaces. To
    //                 complement my technical skills, I am familiar with various tools such as Figma,
    //                 Photoshop and Illustrator, which enable me to streamline my workflow and improve
    //                 efficiency. */}
    //               <ul className="mt-4 text-base text-gray-500">
    //                 <li>
    //                   Proficient: Javascript | React | Tailwind CSS | Node | Express | MongoDB |
    //                   PostgreSQL
    //                 </li>
    //                 <li>Knowledgeable: Typescript | Next.js | Redux | Python | REST API</li>
    //                 <li>
    //                   Tools: Git | GitHub | Figma | Postman | Photoshop | Illustrator | Indesign |
    //                   Grasshopper
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-4">
    //           <div className="sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
    //             <Cloud>{icons}</Cloud>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Skill;
