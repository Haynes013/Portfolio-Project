/*  src/pages/Home.jsx  */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import thmLogo from "../assets/thm-logo.svg";
import htbLogo from "../assets/htb-logo.svg";

const skills = [
  "React",
  "TailwindCSS",
  "JavaScript",
  "Python",
  "Burp Suite",
  "Wireshark",
  "Metasploit",
];

export default function Home() {
  /* ───────────────── Loading spinner ───────────────── */
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);   // spinner ~1 s
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-16 h-16 rounded-full animate-spin border-4 border-indigo-400 border-t-transparent" />
      </div>
    );
  }

  /* ───────────────── Main page ───────────────── */
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-16">
      {/* ░░░ Hero ░░░ */}
      <motion.section
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Hey, I’m Mark — Front‑end Dev &amp; Cyber‑sec Student 🛡️
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
           I’m a cybersecurity student transitioning into a cyber role, with experience freelancing in frontend development.
 I enjoy building clean, user-friendly web applications while always prioritizing security. Though I’m new to the field, I take pride in keeping my clients’ projects safe and reliable. I’m excited to grow and contribute in a fast-paced cybersecurity environment. If you’re looking to build something great or need assistance with your next project, I’d love to connect.
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/projects"
            className="px-5 py-2 rounded-lg shadow bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            View Projects
          </Link>
          <Link
            to="/cyber-lab"
            className="px-5 py-2 rounded-lg shadow bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          >
            Explore Cyber Lab
          </Link>
        </motion.div>
      </motion.section>

      {/* ░░░ Skill badges ░░░ */}
      <motion.section
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <h2 className="text-2xl font-semibold mb-4">⚙️ Tech &amp; Tools</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              className="badge"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* ░░░ Featured cards ░░░ */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">🌟 Featured Sections</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link to="/projects" className="home-card hover:shadow-indigo-300">
            <h3 className="text-xl font-bold">Frontend Projects</h3>
            <p className="text-gray-600 text-sm mt-1">
              Interactive UIs &amp; apps
            </p>
          </Link>

          <Link to="/cyber-lab/demos" className="home-card">
            <h3 className="text-xl font-bold">Cyber Lab Demos</h3>
            <p className="text-gray-600 text-sm mt-1">
              Security‑learning playgrounds
            </p>
          </Link>

          <Link to="/blog" className="home-card">
            <h3 className="text-xl font-bold">Blog &amp; Write‑ups</h3>
            <p className="text-gray-600 text-sm mt-1">
              Walkthroughs, notes &amp; tutorials
            </p>
          </Link>

          <Link to="/cyber-lab" className="home-card">
            <h3 className="text-xl font-bold">CTF Progress</h3>
            <div className="flex gap-3 justify-center mt-2">
              <img src={thmLogo} alt="TryHackMe" className="w-6 h-6" />
              <img src={htbLogo} alt="Hack The Box" className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </section>

      {/* ░░░ Footer ░░░ */}
      <footer className="text-center text-sm text-gray-500 border-t pt-6">
        <p>© {new Date().getFullYear()} Mark Haynes — All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4 text-lg">
          <a
            href="https://github.com/YourUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/YourUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}
