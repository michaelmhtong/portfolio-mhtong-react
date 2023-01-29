import { useState } from "react";
import { HiGlobeAlt } from "react-icons/hi";
import Tilt from "react-parallax-tilt";
import ModalHeading from "./model/ModalHeading";
import ModalPano from "./model/ModalPano";
import ModalYoutube from "./model/ModalYoutube";
import { motion, easeInOut } from "framer-motion";

const Project = () => {
  const [openModalVideo, setOpenModalVideo] = useState(false);
  const [openModalPano, setOpenModalPano] = useState(false);
  const projects = [
    {
      title: "LuxeShop (with Stripe payment).",
      year: "Jan 2023",
      imgSrc: "/assets/image/eshop_computer.png",
      imgAlt: "eshop website in monitor",
      skills: ["Javascript", "React", "Tailwind CSS", "NodeJS", "Stripe", "MongoDB", "Redux"],
      description:
        "Full-stack webshop utilizing React, MongoDB, and JWT for user authorization, integrated Stripe payment functionality to enable secure transactions within the webshop",
      links: [
        {
          text: "Live demo",
          href: "https://eshop.mhtong.tech/",
        },
        {
          text: "Github",
          href: "https://github.com/michaelmhtong/portfolio-eshop",
        },
      ],
    },
    {
      title: "ShadowStrike.",
      year: "Nov 2022",
      href: "",
      imgSrc: "/assets/image/game_tablet.png",
      imgAlt: "",
      skills: ["Javascript", "p5.js", "Algorithm"],
      description:
        "2D shooting game utilizing a ray-casting algorithm for the game mechanics. The project is visualized on a website using Javascript, Three.js, Twinmotion, and Building Information Modelling (BIM) software. Housing complex designed in the Architectural Engineering Graduation Studio.",
      links: [
        {
          text: "Live demo",
          href: "https://game.mhtong.tech/",
        },
        {
          text: "Github",
          href: "https://github.com/michaelmhtong/portfolio-shooting",
        },
      ],
    },
    {
      title: "ReCoNet.",
      year: "Jun 2022",
      href: "",
      video: "CrXdIugj3z0",
      imgSrc: "/assets/image/reconet_mobile.png",
      imgAlt: "",
      skills: [
        "Javascript",
        "Threejs",
        "Rhino",
        "Grasshopper",
        "Archicad",
        "Twinmotion (Epic Game)",
      ],
      description:
        "Housing complex designed in the Architectural Engineering Graduation Studio. The project is visualized on a website using Javascript, Three.js, Twinmotion, and Building Information Modelling (BIM) software.",
      links: [
        {
          text: "Live demo",
          href: "/reconet",
        },
        {
          text: "Project video",
          href: "https://www.youtube.com/watch?v=CrXdIugj3z0&ab_channel=MHTstudio",
        },
      ],
    },
  ];

  return (
    <motion.div
      id="project"
      className="px-12 py-12 bg-silver md:px-32 md:py-20 lg:pt-10 lg:pb-28 xl:px-64 xl:pb-32"
      initial="hidden"
      whileInView="visible"
    >
      {/* title */}
      <div className="pb-8">
        <ModalHeading
          title="Project"
          subtitle="Work with a varity of * and tools"
          word="Framework"
        />
      </div>
      {/* content */}
      {projects.map((project, index) => (
        <motion.div
          id={index}
          className={`py-6 md:py-10 lg:flex lg:py-12 xl:py-16 ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
          initial={index % 2 !== 0 ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: easeInOut, duration: 2, delay: 1 }}
          viewport={{ once: true }}
        >
          {/* img */}
          <Tilt className="pb-4 w-full md:w-10/12 md:container md:m-auto lg:w-full lg:mx-0 lg:my-auto">
            <img src={project.imgSrc} className="lg:max-h-[450px]"></img>
          </Tilt>
          {/* text */}
          <div
            className={`lg:self-center ${
              index % 2 !== 0 ? "lg:pr-20 xl:pr:44" : "lg:pl-16 xl:pl:32"
            }`}
          >
            <div className="font-oblique text-xl">0{index + 1}.</div>
            <div className="font-heading text-2xl text-palm lg:text-3xl xl:text-4xl">
              {project.title}
            </div>
            <div className="font-heading text-sm lg:text-base xl:text:lg">{project.year}</div>
            {/* badges */}
            <div className="py-1">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center mr-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 lg:mr-2"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="pt-3 pb-6 text-sm lg:text-base">{project.description}</div>
            <div className="font-oblique text-base lg:text-lg xl:text-xl">
              {project.links.map((link, index) => (
                <>
                  <a href={link.href} target="_blank">
                    <span className="underline">{link.text}</span>
                  </a>
                  {index < project.links.length - 1 && <span> / </span>}
                </>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
    // <div className="relative bg-white pt-16 pb-32 overflow-hidden">
    //   {projects.map((project, index) => (
    //     <div className="relative" key={index}>
    //       <div className="lg:pb-16 lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
    //         {/* Content */}
    //         <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
    //           <div className="mt-6">
    //             <div>0{index + 1}</div>
    //             <div className="text-3xl font-extrabold tracking-tight text-gray-900">
    //               {project.title}
    //             </div>
    //             <div className="mt-4 text-base text-gray-500">{project.year}</div>
    //             {/* badges */}
    //             <div>
    //               {project.skills.map((skill, index) => (
    //                 <span
    //                   key={index}
    //                   className="inline-flex items-center mr-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
    //                 >
    //                   {skill}
    //                 </span>
    //               ))}
    //             </div>
    //             <p>{project.description}</p>
    //             <div>
    //               <button
    //                 type="button"
    //                 onClick={() => setOpenModalPano(true)}
    //                 className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //               >
    //                 <HiGlobeAlt className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
    //                 Live demo
    //               </button>
    //               <ModalPano open={openModalPano} onClose={() => setOpenModalPano(false)} />
    //             </div>

    //             {/* only show if there is video */}
    //             {project.video && (
    //               <div>
    //                 <button
    //                   type="button"
    //                   onClick={() => setOpenModalVideo(true)}
    //                   className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //                 >
    //                   <HiGlobeAlt className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
    //                   Video
    //                 </button>
    //                 <ModalYoutube open={openModalVideo} onClose={() => setOpenModalVideo(false)} />
    //               </div>
    //             )}
    //           </div>
    //         </div>

    //         {/* Image */}
    //         <div className="relative mx-16">
    //           <Tilt
    //             // scale={0.8}
    //             perspective={800}
    //             style={{ transformStyle: "preserve-3d" }}
    //             // reset={false}
    //             tiltAngleYInitial={15}
    //             gyroscope={true}
    //           >
    //             <div className="absolute">
    //               <img src={project.deviceSrc} alt={project.deviceAlt}></img>
    //             </div>
    //             {project.title !== "ReCoNet" ? (
    //               <div
    //                 style={{ transform: "translateZ(100px) scale(0.88)" }}
    //                 className="absolute shadow-2xl"
    //               >
    //                 {/* sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full */}
    //                 <img src={project.imgSrc} alt={project.imgAlt}></img>
    //               </div>
    //             ) : (
    //               <div
    //                 style={{ transform: "translateZ(100px) scale(0.88)" }}
    //                 className="absolute shadow-2xl top-12 right-10"
    //               >
    //                 {/* sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full */}
    //                 <img src={project.imgSrc} alt={project.imgAlt}></img>
    //               </div>
    //             )}
    //           </Tilt>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Project;
