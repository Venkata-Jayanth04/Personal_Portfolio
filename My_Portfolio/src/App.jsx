import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Global CSS
import "./css/Global.css";

export default function App() {
  const location = useLocation();
  const isWelcome = location.pathname === "/";

  return (
    <div className="app-root">
      {/* Hide navbar on Welcome */}
      {!isWelcome && <Navbar />}

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Hide footer on Welcome */}
      {!isWelcome && (
        <footer className="site-footer">
          © <span id="year">{new Date().getFullYear()}</span> Venkata Jayanth
          Kocherla — All rights reserved
        </footer>
      )}
    </div>
  );
}

