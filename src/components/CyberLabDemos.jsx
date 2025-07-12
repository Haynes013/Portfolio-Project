export default function CyberLabDemos() {
  const demos = [
    {
      title: "Brute Force Login Demo",
      description: "Simulates a login form vulnerable to brute force. Shows rate-limiting and CAPTCHA defenses.",
      url: "/demos/brute-force", // or external link
      tags: ["Auth", "Brute-force", "Defense"]
    },
    {
      title: "XSS Injection Playground",
      description: "Self-hosted XSS demo with vulnerable input fields and sanitization examples.",
      url: "/demos/xss-lab",
      tags: ["XSS", "JavaScript", "Sanitization"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {demos.map((demo, index) => (
        <div key={index} className="p-4 bg-white shadow rounded-xl space-y-2">
          <h3 className="text-lg font-bold text-indigo-600">{demo.title}</h3>
          <p className="text-gray-700 text-sm">{demo.description}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {demo.tags.map((tag, i) => (
              <span key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={demo.url}
            className="text-sm text-indigo-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Demo →
          </a>
        </div>
      ))}
    </div>
  );
}
