import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ThreeD from "./pages/ThreeD";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reconet" element={<ThreeD />} />
      </Routes>
    </Router>
  );
}

export default App;
