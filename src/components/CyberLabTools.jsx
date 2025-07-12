export default function CyberLabTools() {
  const tools = [
    {
      name: "Burp Suite",
      description: "Used for web application testing, intercepting HTTP traffic, and exploiting XSS/SQLi.",
      link: "https://portswigger.net/burp",
    },
    {
      name: "Nmap",
      description: "Powerful port scanner and host enumeration tool. Used for footprinting and recon.",
      link: "https://nmap.org/"
    },
    {
      name: "Wireshark",
      description: "Packet analyzer for inspecting live or captured traffic, used in network forensics.",
      link: "https://www.wireshark.org/"
    },
    {
      name: "Metasploit Framework",
      description: "Exploit development and penetration testing framework.",
      link: "https://www.metasploit.com/"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {tools.map((tool, index) => (
        <div key={index} className="p-4 bg-white rounded-xl shadow space-y-2">
          <h3 className="text-lg font-bold text-indigo-600">{tool.name}</h3>
          <p className="text-sm text-gray-700">{tool.description}</p>
          <a
            href={tool.link}
            className="text-sm text-indigo-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website →
          </a>
        </div>
      ))}
    </div>
  );
}
