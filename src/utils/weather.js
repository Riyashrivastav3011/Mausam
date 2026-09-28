export const getWeatherEmoji = (type) => ({
  sun: "☀️",
  partly: "⛅",
  cloud: "☁️",
  rain: "🌧️",
  storm: "⛈️",
}[type] || "🌤️");

export const getAqiStatus = (value) => {
  if (value <= 50) return "Good";
  if (value <= 100) return "Moderate";
  if (value <= 150) return "Unhealthy for sensitive groups";
  return "Unhealthy";
};

export const getComfortLabel = (score) => {
  if (score >= 80) return "Very comfortable";
  if (score >= 65) return "Comfortable";
  if (score >= 50) return "Fair";
  return "Uncomfortable";
};