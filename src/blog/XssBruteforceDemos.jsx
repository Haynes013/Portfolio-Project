export default function XssBruteforceDemos() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-indigo-700">
        Understanding Brute-Force and XSS Demos
      </h1>
      <p className="text-sm text-gray-500 mb-4">Posted on July 10, 2025</p>

      <h2 className="text-xl font-semibold text-red-500">1. Brute-Force Login Demo</h2>
      <p>
        This demo simulates a login form where you can try logging in with incorrect credentials. 
        After 3 failed attempts, the account is locked for 30 seconds. 
        It includes a fake CAPTCHA, login attempt logs, and a reset option.
      </p>

      <ul className="list-disc ml-6 text-sm text-gray-700">
        <li>🚫 Locks account after 3 failed login attempts</li>
        <li>🧩 Fake CAPTCHA shown after 2 bad tries</li>
        <li>🪵 Login attempts are logged to the screen</li>
      </ul>

      <p className="text-sm text-gray-700">
        ➤ Try it: <a href="/demos/brute-force" className="text-indigo-600 underline">Brute Force Login Demo</a>
      </p>

      <h2 className="text-xl font-semibold text-red-500 mt-6">2. XSS Injection Playground</h2>
      <p>
        This demo renders user input as HTML. It lets you toggle between sanitized and unsanitized rendering, 
        helping you safely test XSS examples like:
        <code className="bg-gray-100 px-2 py-1 ml-2 rounded">&lt;script&gt;alert('XSS')&lt;/script&gt;</code>
      </p>

      <ul className="list-disc ml-6 text-sm text-gray-700">
        <li>🧪 Compare escaped vs unescaped input</li>
        <li>⚙️ Submit button + test XSS payload shortcut</li>
        <li>📋 Shows raw HTML output + payload counter</li>
      </ul>

      <p className="text-sm text-gray-700">
        ➤ Try it: <a href="/demos/xss-lab" className="text-indigo-600 underline">XSS Playground Demo</a>
      </p>

      <p className="mt-6 text-gray-700 text-sm">
        Both of these labs are meant to help beginners understand how real-world attacks behave — safely and visually. 
        Check out the full Cyber Lab for more demos and writeups.
      </p>
    </div>
  );
}

