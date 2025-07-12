import { useState } from "react";

export default function XssPlayground() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [sanitized, setSanitized] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(input);
    setAttempts((prev) => prev + 1);
  };

  const toggleSanitize = () => setSanitized((prev) => !prev);

  const testXSSPayload = () => {
    const payload = `<script>alert('XSS')</script>`;
    setInput(payload);
    setSubmitted(payload);
    setAttempts((prev) => prev + 1);
  };

  const escapeHTML = (str) =>
    str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 shadow-lg rounded-xl space-y-6">
      <h2 className="text-2xl font-bold text-red-600">XSS Injection Playground</h2>
      <p className="text-sm text-gray-600">
        Enter any HTML or JavaScript below to simulate a reflected XSS vulnerability. Example:
        <code className="bg-gray-100 px-1 mx-1">&lt;script&gt;alert('XSS')&lt;/script&gt;</code>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          rows="4"
          className="w-full border rounded p-2 font-mono text-sm"
          placeholder="Type potentially malicious HTML/JS here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="flex items-center gap-2">
          <input
            id="sanitize"
            type="checkbox"
            checked={sanitized}
            onChange={toggleSanitize}
          />
          <label htmlFor="sanitize" className="text-sm">
            Sanitize output
          </label>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={testXSSPayload}
            className="px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600"
          >
            Test XSS Payload
          </button>
        </div>
      </form>

      <div className="bg-gray-100 p-4 rounded border">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">🚨 Rendered Output:</h3>
        <div
          className="min-h-[3rem] p-3 bg-white border rounded"
          dangerouslySetInnerHTML={{
            __html: sanitized ? escapeHTML(submitted) : submitted,
          }}
        />
      </div>

      <div className="bg-white border p-3 rounded shadow-sm font-mono text-xs text-gray-700 space-y-2">
        <div><strong>Attempt Count:</strong> {attempts}</div>
        <div>
          <strong>Raw Submitted HTML:</strong>
          <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
            {submitted || "(no submission yet)"}
          </pre>
        </div>
      </div>
    </div>
  );
}
