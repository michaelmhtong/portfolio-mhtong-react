import React from "react";
import { motion, useScroll } from "framer-motion";

const Experience = () => {
  const { scrollYProgress } = useScroll();

  const experiences = [
    {
      imageSrc: "/assets/ptsa.svg",
      imageAlt: "",
      position: "Assistant Designer (Computational Design)",
      companyName: "Popma ter Steege Architecten",
      skillSrc: [""],
      skilAlt: [""],
      startDate: "Sep 2022",
      endDate: "Present",
      summaryPoints: [
        "Utilized Python and PDOK API to gather geographic context in the Netherlands, resulting in savings of over EUR 5,000",
        "Optimized solar radiation using Rhino and Grasshopper Scripting, resulting in an 80% increase in efficiency",
      ],
    },
    {
      imageSrc: "/assets/ptg.svg",
      imageAlt: "",
      position: "Architectural Designer",
      companyName: "P&T Architects and Engineers Limited",
      skillSrc: [""],
      skilAlt: [""],
      startDate: "Aug 2019",
      endDate: "May 2020",
      summaryPoints: [
        "Generated an optimized layout plan for an Apartment-Complex using Grasshopper Scripting",
        "Created 3D renderings of a Community Health Centre using Twinmotion and Adobe Creative Suite",
      ],
    },
    {
      imageSrc: "/assets/biad.svg",
      imageAlt: "",
      position: "Intern (Computational Design)",
      companyName: "Beijing Institute of Architectural Design (BIAD) Co. Ltd.",
      skillSrc: [""],
      skilAlt: [""],
      startDate: "Jun 2019",
      endDate: "Jul 2019",
      summaryPoints: [
        "Enhanced the circulation design for the Beijing Winter Olympics 2022 by utilizing Grasshopper Scripting",
      ],
    },
  ];

  const symbol = "/assets/symbol.svg";

  return (
    <div className="flex flex-col px-12 py-16 bg-silver">
      {/* title */}
      <div className="text-right">
        <img src={symbol} alt="/" className="w-10 h-10 cursor-pointer inline-block"></img>
        <div>
          <p className="pb-3 font-heading text-palm text-5xl xl:text-6xl">
            <div className="pb-2">EXP</div>
            <div>ERIENCE.</div>
          </p>
          <p className="pb-2 font-heading text-2xl xl:text-3xl">
            A wide range of <i className="font-oblique">Web</i> technology
            <em className="text-palm">.</em>
          </p>
        </div>
      </div>
      <div className="relative container flex flex-col space-y-10 pb-10">
        {/* timeline */}
        <div className="absolute z-0 w-0.5 left-1.5 h-full bg-palm inset-0"></div>
        {/* content */}
        {experiences.map((experience, index) => (
          <div id={index} className="pl-8">
            {/* point circle */}
            <span className="absolute left-0 h-4 w-4 rounded-full bg-palm"></span>
            <span className="font-body text-xs tracking-wide">
              {experience.startDate} - {experience.endDate}
            </span>
            <h1 className="pt-1 font-heading text-2xl text-palm">{experience.position}</h1>
            <p className="pt-1 font-oblique text-base text-light">{experience.companyName}</p>
            <ul className="text-sm pt-3">
              {experience.summaryPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    // <div className="relative container mx-auto px-6 flex flex-col space-y-20">
    //   {/* TimeLine */}
    //   <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-16 md:mx-auto md:right-0 md:left-0"></div>

    //   {/* Content */}
    //   {experiences.map((experience, index) => (
    //     <motion.div
    //       className="relative z-10"
    //       initial={{ x: index % 2 !== 0 ? 100 : -100, opacity: 0 }} // odd index: x:-100, even index: x:100
    //       whileInView={{ x: 0, opacity: 1 }}
    //       transition={{ duration: 1.5 }}
    //       key={index}
    //     >
    //       <img
    //         src={experience.imageSrc}
    //         alt=""
    //         className="h-24 w-24 bg-white object-fit-contain rounded-full shadow-md border-4 border-white sm:absolute md:mx-auto md:left-0 md:right-0"
    //       />
    //       <div
    //         className={`${
    //           index % 2 !== 0 ? "timeline-container" : "timeline-container timeline-container-left" // even index left
    //         }`}
    //       >
    //         <div
    //           className={`${
    //             index % 2 !== 0 ? "timeline-pointer" : "timeline-pointer timeline-pointer-left" // even index left
    //           }`}
    //           aria-hidden="true"
    //         ></div>

    //         <div className="bg-white p-6 rounded-md shadow-md">
    //           <span className="font-bold text-indigo-600 text-sm tracking-wide">
    //             {experience.startDate} - {experience.endDate}
    //           </span>
    //           <h1 className="text-2xl font-bold pt-1">{experience.position}</h1>
    //           <p className="pt-1">{experience.companyName}</p>
    //           <p>{experience.summaryPoints}</p>
    //         </div>
    //       </div>
    //     </motion.div>
    //   ))}
    // </div>
  );
};

export default Experience;
