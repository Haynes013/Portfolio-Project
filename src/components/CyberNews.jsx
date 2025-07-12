import { useEffect, useState } from "react";

export default function CyberNews() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/news")
      .then((res) => res.json())
      .then(setArticles)
      .catch((err) => {
        console.error(err);
        setError("Could not fetch news");
      });
  }, []);

  // Filtered articles by title or summary
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl space-y-4">
      <h2 className="text-xl font-bold text-indigo-700">📰 Cybersecurity News</h2>

      {/* Search Input */}
     <div className="relative">
  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
  <input
    type="text"
    placeholder="Search articles..."
    className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>


      {error && <p className="text-red-500">{error}</p>}

      {/* Scrollable News List */}
      <div className="max-h-96 overflow-y-auto pr-2">
        {filteredArticles.length === 0 && !error ? (
          <p className="text-gray-500 mt-4">No matching articles found.</p>
        ) : (
          <ul className="space-y-4">
            {filteredArticles.map((article, index) => (
              <li key={index} className="border-b pb-2">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-indigo-600 hover:underline"
                >
                  {article.title}
                </a>
                <p className="text-sm text-gray-700">{article.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

