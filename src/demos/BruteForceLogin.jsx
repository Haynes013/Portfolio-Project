import { useState, useEffect } from "react";

export default function BruteForceLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(0);
  const [logs, setLogs] = useState([]);

  const correctUsername = "admin";
  const correctPassword = "password123";

  // ⏱ Countdown unlock logic
  useEffect(() => {
    if (locked && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && locked) {
      setLocked(false);
      setMessage("🔓 Account unlocked. Try again.");
      setAttempts(0);
    }
  }, [locked, timer]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (locked) {
      setMessage(`⏱ Account locked. Try again in ${timer} sec.`);
      return;
    }

    const logEntry = {
      time: new Date().toLocaleTimeString(),
      user: username,
      pass: password,
      status: "❌ Failed"
    };

    if (username === correctUsername && password === correctPassword) {
      setMessage("✅ Login successful!");
      setAttempts(0);
      setLogs((prev) => [...prev, { ...logEntry, status: "✅ Success" }]);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setLogs((prev) => [...prev, logEntry]);

      if (newAttempts >= 3) {
        setLocked(true);
        setTimer(30); // lock for 30 seconds
        setMessage("🔒 Too many failed attempts. Account locked for 30 seconds.");
      } else {
        setMessage(`❌ Invalid credentials. Attempt ${newAttempts}/3`);
      }
    }
  };

  const reset = () => {
    setUsername("");
    setPassword("");
    setAttempts(0);
    setLocked(false);
    setTimer(0);
    setMessage("🔄 Demo reset.");
    setLogs([]);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow-lg rounded-xl space-y-5">
      <h2 className="text-2xl font-bold text-indigo-700">Brute-Force Login Demo</h2>
      <p className="text-sm text-gray-600">
        Enter credentials. Locks after 3 failed attempts for 30 seconds.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          disabled={locked}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          disabled={locked}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 🧩 Fake CAPTCHA after 2+ failed attempts */}
        {attempts >= 2 && !locked && (
          <div className="bg-gray-100 p-2 rounded flex items-center space-x-2">
            <img
              src="https://fakeimg.pl/100x40/?text=Captcha"
              alt="captcha"
              className="rounded border"
            />
            <input
              type="text"
              placeholder="Enter CAPTCHA"
              disabled
              className="p-1 border rounded text-gray-400 w-1/2"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={locked}
          className={`w-full py-2 rounded text-white font-semibold ${
            locked ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          Login
        </button>
      </form>

      <p className="text-sm text-red-600">{message}</p>

      <button
        onClick={reset}
        className="text-indigo-500 underline text-sm mt-2"
      >
        Reset Demo
      </button>

      {/* 🪵 Log viewer */}
      <div className="mt-6 bg-gray-100 p-3 rounded text-sm font-mono max-h-48 overflow-y-auto">
        <h3 className="font-semibold mb-2 text-indigo-600">🪵 Login Attempt Log:</h3>
        {logs.length === 0 && <p className="text-gray-500">No attempts yet.</p>}
        {logs.map((log, i) => (
          <div key={i} className="flex justify-between border-b py-1">
            <span>{log.time}</span>
            <span className="truncate w-1/3">{log.user}</span>
            <span>{log.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
