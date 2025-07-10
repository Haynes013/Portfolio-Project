export default function ProjectCard({ title, image, description, tech, demoLink, codeLink }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-indigo-600">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          {tech.map((t, i) => (
            <span key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-3">
          {demoLink && <a href={demoLink} target="_blank" className="text-blue-500 underline">Live Demo</a>}
          {codeLink && <a href={codeLink} target="_blank" className="text-gray-500 underline">Code</a>}
        </div>
      </div>
    </div>
  );
}
