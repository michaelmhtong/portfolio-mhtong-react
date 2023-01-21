import "./App.css";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Experience />
      <Project />
    </div>
  );
}

export default App;
