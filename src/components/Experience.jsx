import React from "react";
import { useState } from "react";
import { motion, easeIn, easeInOut } from "framer-motion";
import { InView } from "react-intersection-observer";
import ModalHeading from "./ModalHeading";

const Experience = () => {
  const experiences = [
    {
      position: "Full Stack Developer.",
      companyName: "Small Giants",
      startDate: "Apr 2023",
      endDate: "Present",
      summaryPoints: [
        "Leveraged Frontend tools like React, SCSS, and JavaScript integrated with StoryBlok to develop a headless CMS",
        "Customized the design and functionality of Shopify Websites to align with client's goals, such as O’Neill and Duca Del Cosma",
        "Implemented Backend technologies including Node.js, REST API, GraphQL and SQL to enable efficient data handling"
      ],
    },
    {
      position: "Assistant Designer (Computational Design).",
      companyName: "Popma ter Steege Architecten",
      startDate: "Sep 2022",
      endDate: "Feb 2023",
      summaryPoints: [
        "Utilized Python and PDOK API to gather geographic context in the Netherlands, resulting in savings of over EUR 5,000",
        "Optimized solar radiation using Rhino and Grasshopper Scripting, resulting in an 80% increase in efficiency",
      ],
    },
    {
      position: "IT Support Technician (Part-time).",
      companyName: "Candace Guidance Signage Limited",
      startDate: "Jul 2018",
      endDate: "Jun 2020",
      summaryPoints: [
        "Built a user-friendly website using WordPress resulted in increased traffic and engagement",
        "Provided daily IT support, including troubleshooting hardware and software issues which improve team productivity",
      ],
    },
    {
      position: "Architectural Designer.",
      companyName: "P&T Architects and Engineers Limited",
      startDate: "Aug 2019",
      endDate: "May 2020",
      summaryPoints: [
        "Generated an optimized layout plan for an Apartment-Complex using Grasshopper Scripting",
        "Created 3D renderings of a Community Health Centre using Twinmotion and Adobe Creative Suite",
      ],
    },
  ];

  const [entered, setEntered] = useState(false);

  return (
    <InView
      as="div"
      onChange={(inView, entry) => {
        console.log("Inview:", inView, "entry:", entry);
        if (inView === true) {
          setEntered(true);
        }
      }}
      root={null}
      rootMargin="0px"
      threshold={0.8}
    >
      <div
        id="experience"
        className="overflow-hidden flex flex-col px-12 py-12 bg-silver md:px-32 md:py-20 xl:px-[12%] 2xl:px-[14%] 3xl:px-[18%]"
      >
        {/* title */}
        <div className="text-right pb-4">
          <ModalHeading title="Experience" subtitle="Journey towards * industry" word="Tech" />
        </div>
        <div className="relative container flex flex-col space-y-10 pb-10 md:space-y-14">
          {/* timeline */}
          <div className="absolute z-0 w-0.5 left-[6.5px] h-full inset-0">
            <svg height="100%">
              <motion.line
                y2="100%"
                stroke="#62973d"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={entered === true ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ ease: easeIn, duration: 0.8, delay: 0.3 }}
              />
            </svg>
          </div>
          {/* content */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="overflow-hidden pl-8"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: easeInOut, duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* point circle */}
              <span className="absolute left-0 h-4 w-4 rounded-full bg-palm"></span>
              <span className="font-body text-xs tracking-wide xl:text-sm">
                {experience.startDate} - {experience.endDate}
              </span>
              <h1 className="pt-1 font-heading text-2xl text-palm lg:text-3xl xl:text-4xl">
                {experience.position}
              </h1>
              <p className="pt-1 font-oblique text-base text-light lg:text-xl xl:text-2xl">
                {experience.companyName}
              </p>
              <ul className="text-sm pt-3 xl:text-base">
                {experience.summaryPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </InView>
  );
};

export default Experience;

