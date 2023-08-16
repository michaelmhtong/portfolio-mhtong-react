import Tilt from "react-parallax-tilt";
import ModalHeading from "./ModalHeading";
import { motion, easeInOut } from "framer-motion";

const Project = () => {
  const projects = [
    {
      title: "Housing SaaS project (with Stripe payment).",
      year: "April 2023",
      imgSrc: "/assets/image/househunter.png",
      imgAlt: "housing website in monitor",
      skills: ["Javascript", "React", "NodeJS",  "PostgreSQL", "Stripe", "Google API", "Postmark"],
      description:
        "Web scraping service that utilizes email notifications to inform users of newly available rental apartments, which attracted over 200 registered users within just one month",
      links: [
        {
          text: "Live demo",
          href: "https://househunterpro.nl/",
        },
      ],
    },
    {
      title: "LuxeShop (with Adyen).",
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
        "2D shooting game utilizing a ray-casting algorithm for the game mechanics. The player must use a limited angle and view to shoot enemies, with randomly generated wall blocks that change the gameplay experience each time.",
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
          text: "Project video*",
          href: "https://www.youtube.com/watch?v=CrXdIugj3z0&ab_channel=MHTstudio",
        },
      ],
    },
  ];

  return (
    <motion.div
      id="project"
      className="overflow-hidden px-12 py-12 bg-silver md:px-32 md:py-20 lg:pt-10 lg:pb-28 xl:pb-32 xl:px-[12%] 2xl:px-[14%] 3xl:px-[18%]"
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
          key={index}
          className={`py-6 md:py-10 lg:flex lg:py-12 xl:py-16 ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
          initial={index % 2 !== 0 ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: easeInOut, duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* img */}
          <Tilt className="pb-4 w-full md:w-10/12 md:container md:m-auto lg:self-end">
            <img src={project.imgSrc} className="lg:max-h-[450px]"></img>
          </Tilt>
          {/* text */}
          <div
            className={`lg:self-center ${
              index % 2 !== 0 ? "lg:pr-20 xl:pr-44 2xl:pr-60" : "lg:pl-16 xl:pl:32"
            }`}
          >
            <div className="font-oblique text-xl">0{index + 1}.</div>
            <div className="font-heading text-2xl text-palm lg:text-3xl 2xl:xl:text-4xl xl:py-1">
              {project.title}
            </div>
            <div className="font-heading text-sm lg:text-base xl:text-lg 2xl:text-xl">
              {project.year}
            </div>
            {/* badges */}
            <div className="py-1 xl:py-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center mr-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 lg:mr-2 xl:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="pt-3 pb-6 text-sm lg:text-base xl:text-lg">{project.description}</div>
            <div className="font-oblique text-base lg:text-lg xl:text-xl 2xl:text-2xl">
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
