import { useState } from "react";

const blogPosts = [
  {
    title: "Understanding XSS & Brute-Force Demos",
    date: "July 10, 2025",
    slug: "xss-bruteforce-demos",
    tags: ["Security", "Frontend", "XSS", "Auth"],
    excerpt: "A hands-on walkthrough of two security demos showing login brute force and XSS in action.",
  },
  // Add more posts here
];

const allTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags))
);

export default function Blog() {
  const [activeTag, setActiveTag] = useState(null);

  const filteredPosts = activeTag
    ? blogPosts.filter((post) => post.tags.includes(activeTag))
    : blogPosts;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-10">

      {/* 📰 Featured Post */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-indigo-700">Featured Post</h2>
        <p className="text-lg font-semibold mt-1">{blogPosts[0].title}</p>
        <p className="text-sm text-gray-600 mt-2">{blogPosts[0].excerpt}</p>
        <a
          href={`/blog/${blogPosts[0].slug}`}
          className="text-indigo-600 text-sm mt-3 inline-block underline"
        >
          Read More →
        </a>
      </div>

      {/* 🏷️ Tag Filter Bar */}
      <div className="flex flex-wrap gap-3 items-center">
        <span className="font-medium text-gray-600">Filter by tag:</span>
        <button
          className={`px-3 py-1 rounded-full border text-sm ${
            !activeTag
              ? "bg-indigo-600 text-white"
              : "hover:bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTag(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`px-3 py-1 rounded-full border text-sm ${
              activeTag === tag
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 🗃 Blog Cards */}
      <div className="grid grid-cols-1 gap-6">
        {filteredPosts.map((post, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 bg-white shadow hover:shadow-md transition space-y-2"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700 text-sm">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <a
              href={`/blog/${post.slug}`}
              className="inline-block mt-2 text-indigo-600 text-sm font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
