const projects = [
  {
    title: "DVWA - XSS & SQL Injection",
    description: "Pentest walkthrough with screenshots and Burp Suite logs.",
    tags: ["DVWA", "Burp", "XSS", "SQLi"],
    reportLink: "/reports/dvwa-xss.pdf"
  },
  {
    title: "Python Port Scanner",
    description: "A custom script for scanning ports with banner grabbing.",
    tags: ["Python", "Nmap", "Recon"],
    codeLink: "https://github.com/yourusername/port-scanner"
  }
];

export default function CyberLabProjects() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((proj, index) => (
        <div key={index} className="p-4 bg-white shadow rounded-xl space-y-2">
          <h3 className="text-lg font-bold text-indigo-600">{proj.title}</h3>
          <p className="text-gray-700 text-sm">{proj.description}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {proj.tags.map((tag, i) => (
              <span key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          {proj.reportLink && (
            <a
              href={proj.reportLink}
              className="text-sm text-indigo-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Report
            </a>
          )}
          {proj.codeLink && (
            <a
              href={proj.codeLink}
              className="text-sm text-indigo-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

