import Tilt from "react-parallax-tilt";
import ModalHeading from "./ModalHeading";
import { motion, easeInOut } from "framer-motion";

const Project = () => {
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
  );
};

export default Project;
