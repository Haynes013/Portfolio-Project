import { useEffect, useState } from "react";

export default function CyberNews() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/news")
      .then((res) => res.json())
      .then(setArticles)
      .catch((err) => setError("Could not fetch news"));
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl space-y-4">
      <h2 className="text-xl font-bold text-indigo-700">📰 Cybersecurity News</h2>

      {error && <p className="text-red-500">{error}</p>}

      {articles.length === 0 && !error && <p>Loading...</p>}

      <ul className="space-y-4">
        {articles.map((article, index) => (
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
    </div>
  );
}
