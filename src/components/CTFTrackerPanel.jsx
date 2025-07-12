import { motion } from "framer-motion";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { ctfAccounts } from "../data/ctfAccounts";
import { thmData } from "../data/thmData";
import thmLogo from "../assets/thm-logo.svg";
import htbLogo from "../assets/htb-logo.svg";

Chart.register(ArcElement, Tooltip, Legend);

export default function CTFTrackerPanel() {
  const thmPercent = (thmData.completedRooms / 100) * 100; // Example: 100 rooms max
  const htbPercent = 60; // Static for now

  const pieData = {
    labels: ["TryHackMe", "Hack The Box"],
    datasets: [
      {
        data: [thmPercent, htbPercent],
        backgroundColor: ["#10B981", "#4F46E5"],
        hoverBackgroundColor: ["#059669", "#4338CA"],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: { position: "bottom" },
    },
    animation: { animateRotate: true, duration: 1000 },
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">CTF Progress Tracker</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* THM */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-4 border rounded-lg bg-green-50 shadow flex items-center gap-4 flex-1"
        >
          <img src={thmLogo} alt="TryHackMe" className="w-12 h-12" />
          <div>
            <h2 className="text-xl font-semibold text-green-700">TryHackMe</h2>
            <p className="text-gray-700 text-sm mt-1">
              Rooms Completed: <strong>{thmData.completedRooms}</strong> | Rank:{" "}
              <strong>{thmData.rank}</strong> | Streak:{" "}
              <strong>{thmData.streak} days</strong>
            </p>
          </div>
        </motion.div>

        {/* HTB */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-4 border rounded-lg bg-indigo-50 shadow flex items-center gap-4 flex-1"
        >
          <img src={htbLogo} alt="Hack The Box" className="w-12 h-12" />
          <div>
            <h2 className="text-xl font-semibold text-indigo-700">Hack The Box</h2>
            <img
              src={`https://www.hackthebox.com/badge/image/${ctfAccounts.hackthebox}`}
              alt="HTB Badge"
              className="mt-1 rounded border shadow max-w-[120px]"
            />
            <a
              href={`https://app.hackthebox.com/profile/${ctfAccounts.hackthebox}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline text-sm mt-2 inline-block"
            >
              View Profile →
            </a>
          </div>
        </motion.div>

        {/* Chart */}
        <div className="flex-1 max-w-sm">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </motion.div>
  );
}
