import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [units, setUnits] = useState("imperial");

  const API_KEY = "41c01edd7fa42adf14bbb49228bedc3f"; // ← replace this with your key

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

 const toggleUnits = () => {
    setUnits((prev) => (prev === "imperial" ? "metric" : "imperial"));
    // Optional: refresh weather on toggle
    if (city) getWeather();
  };

  // Unit label
  const tempUnit = units === "imperial" ? "°F" : "°C";
  const speedUnit = units === "imperial" ? "mph" : "m/s";

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
      <h2 className="text-xl font-bold text-indigo-700">Weather App</h2>

      <div className="flex gap-2">
	<form
  onSubmit={(e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    getWeather();
  }}
  className="flex gap-2 w-full"
>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
	</form>
      </div>

      <div className="text-right">
        <button
          onClick={toggleUnits}
          className="text-sm text-indigo-600 underline"
        >
          Switch to {units === "imperial" ? "Celsius (°C)" : "Fahrenheit (°F)"}
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="text-gray-700 space-y-1">
  <p className="text-lg font-semibold">{weather.name}</p>

  <div className="flex items-center gap-4">
    <img
      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      alt={weather.weather[0].description}
    />
    <div>
      <p className="text-xl font-bold">
        {weather.main.temp} {tempUnit}
      </p>
      <p className="capitalize">{weather.weather[0].description}</p>
    </div>
  </div>

  <p>💧 Humidity: {weather.main.humidity}%</p>
  <p>🌬️ Wind: {weather.wind.speed} {speedUnit}</p>
</div>

      )}
    </div>
  );
}
