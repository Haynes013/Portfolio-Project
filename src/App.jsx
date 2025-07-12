import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CyberLab from "./pages/CyberLab";
import Blog from "./pages/Blog";
import About from "./pages/About";
import BruteForceLogin from "./demos/BruteForceLogin";
import XssPlayground from "./demos/XssPlayground";
import XssBruteforceDemos from "./blog/XssBruteforceDemos";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cyber-lab" element={<CyberLab />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
	    <Route path="/demos/brute-force" element={<BruteForceLogin />} />
	    <Route path="/demos/xss-lab" element={<XssPlayground />} />
	    <Route path="/blog/xss-bruteforce-demos" element={<XssBruteforceDemos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


