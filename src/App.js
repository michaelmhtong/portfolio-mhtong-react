import "./App.css";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Experience />
    </div>
  );
}

export default App;
