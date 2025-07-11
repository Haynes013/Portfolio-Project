import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Calculator from "../components/Calculator";
import WeatherApp from "../components/WeatherApp";
import CyberNews from "../components/CyberNews";

export default function Projects() {
  const projectData = [
    {
      title: "Weather App",
      image: "",
      description: "Fetches weather data using OpenWeatherMap API with a clean UI.",
      tech: ["React", "Tailwind", "API"],
      embeddedDemo: <WeatherApp/>,
    },
    {
      title: "Calculator Demo",
      image: "",
      description: "A working calculator built in React with basic math functions.",
      tech: ["React", "JavaScript"],
      embeddedDemo: <Calculator/>,
    },
    {
      title: "Cyber News Scraper",
      image: "",
      description: "Scrapes latest cybersecurity news and displays them in a dashboard.",
      tech: ["Python", "Flask", "Bootstrap", "React", "Web Scraping"],
      embeddedDemo: <CyberNews/>,
      codeLink: "#"
    }
  ];

  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState("");

  const allTechs = [...new Set(projectData.flatMap(p => p.tech))];

  const filteredProjects = projectData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                          project.description.toLowerCase().includes(search.toLowerCase());

    const matchesTech = selectedTech
      ? project.tech.includes(selectedTech)
      : true;

    return matchesSearch && matchesTech;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">🖼️ Frontend Projects</h1>

      {/* Search + Filter */}
      <div className="flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="Search projects..."
          className="border p-2 rounded w-full md:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium mr-2">Filter by Tech:</span>
          {allTechs.map((tech, i) => (
            <button
              key={i}
              onClick={() => setSelectedTech(tech === selectedTech ? "" : tech)}
              className={`px-3 py-1 rounded text-sm ${
                tech === selectedTech
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {tech}
            </button>
          ))}
          {selectedTech && (
            <button
              onClick={() => setSelectedTech("")}
              className="text-sm text-red-500 underline ml-2"
            >
              Clear Filter
            </button>
          )}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj, i) =>
          proj.embeddedDemo ? (
            <div key={i}>
              <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
              {proj.embeddedDemo}
            </div>
          ) : (
            <ProjectCard key={i} {...proj} />
          )
        )}
      </div>
    </div>
  );
}

