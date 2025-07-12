export default function CyberLabWriteups() {
  const posts = [
    {
      title: "TryHackMe: Basic Pentesting",
      summary: "Enumeration, SSH brute-force, privilege escalation using cron jobs.",
      link: "/writeups/basic-pentesting", // use Markdown renderer later
      tags: ["TryHackMe", "Linux", "Privilege Escalation"]
    },
    {
      title: "Finding XSS in DVWA",
      summary: "Step-by-step writeup of reflected and stored XSS using Burp Suite.",
      link: "/writeups/dvwa-xss",
      tags: ["XSS", "Burp Suite", "DVWA"]
    }
  ];

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <div key={index} className="p-4 bg-white rounded-xl shadow space-y-1">
          <h3 className="text-lg font-bold text-indigo-700">{post.title}</h3>
          <p className="text-gray-700 text-sm">{post.summary}</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {post.tags.map((tag, i) => (
              <span key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={post.link}
            className="text-sm text-indigo-500 underline"
          >
            Read more →
          </a>
        </div>
      ))}
    </div>
  );
}
