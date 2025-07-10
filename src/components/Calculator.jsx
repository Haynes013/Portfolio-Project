import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"];

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg w-64">
      <div className="bg-gray-100 text-right p-2 rounded font-mono text-lg mb-4 h-12">{input || "0"}</div>
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => handleClick(btn)}
            className="bg-indigo-200 hover:bg-indigo-300 text-gray-800 font-bold py-2 rounded"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
	
