import React from "react";
import { HiGlobeAlt } from "react-icons/hi";
import Tilt from "react-parallax-tilt";

const Project = () => {
  const computerSrc = "/assets/devices_computer.png";
  const projects = [
    {
      title: "LuxeShop (with Stripe payment)",
      year: "2023",
      href: "",
      imgSrc: "/assets/eshop_computer.jpg",
      imgAlt: "",
      skills: ["Javascript", "React", "Tailwind CSS", "NodeJS", "Stripe", "MongoDB", "Redux"],
      description:
        "Developed and implemented a full-stack webshop utilizing React, MongoDB, and JWT for user authorization, Integrated Stripe payment functionality to enable secure transactions within the webshop",
    },
  ];

  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      {projects.map((project, index) => (
        <div className="relative" key={index}>
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            {/* Content */}
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div className="mt-6">
                <div>0{index + 1}</div>
                <div className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {project.title}
                </div>
                <div className="mt-4 text-base text-gray-500">{project.year}</div>
                {/* badges */}
                <div>
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center mr-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p>{project.description}</p>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <HiGlobeAlt className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                  Live demo
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative mt-4">
              <Tilt
                scale={0.8}
                perspective={800}
                style={{ transformStyle: "preserve-3d" }}
                reset={false}
                tiltAngleYInitial={10}
                gyroscope ={true}
              >
                <div className="absolute">
                  <img src={computerSrc} alt="/"></img>
                </div>
                <div
                  style={{ transform: "translateZ(50px) scale(0.9)" }}
                  className="absolute shadow-2xl"
                >
                  {/* sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full */}
                  <img src={project.imgSrc} alt={project.imgAlt}></img>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
