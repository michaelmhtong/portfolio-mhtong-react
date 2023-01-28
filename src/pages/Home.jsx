import React from "react";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skill from "../components/Skill";

const Home = () => {
  return (
    <div>
      <Hero />
      <Skill />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
