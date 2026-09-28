export const currentWeather = {
  city: "New Delhi",
  country: "India",
  temperature: 28,
  feelsLike: 30,
  condition: "Partly Cloudy",
  high: 33,
  low: 24,
  humidity: 62,
  wind: 14,
  visibility: 8.4,
  pressure: 1012,
  uv: 6,
  aqi: 74,
  aqiLabel: "Moderate",
  sunrise: "06:08 AM",
  sunset: "06:12 PM",
};

export const forecast = [
  { day: "Today", icon: "partly", high: 33, low: 24, rain: 20 },
  { day: "Mon", icon: "sun", high: 34, low: 25, rain: 10 },
  { day: "Tue", icon: "cloud", high: 31, low: 24, rain: 35 },
  { day: "Wed", icon: "rain", high: 29, low: 23, rain: 68 },
  { day: "Thu", icon: "rain", high: 30, low: 22, rain: 54 },
  { day: "Fri", icon: "partly", high: 32, low: 23, rain: 22 },
  { day: "Sat", icon: "sun", high: 34, low: 24, rain: 8 },
];

export const hourlyRain = [
  { time: "Now", rain: 20 },
  { time: "10 AM", rain: 18 },
  { time: "12 PM", rain: 12 },
  { time: "2 PM", rain: 25 },
  { time: "4 PM", rain: 38 },
  { time: "6 PM", rain: 46 },
  { time: "8 PM", rain: 32 },
  { time: "10 PM", rain: 18 },
];

export const tides = [
  { time: "06:10", height: 0.7, type: "Low" },
  { time: "12:42", height: 2.2, type: "High" },
  { time: "18:55", height: 0.5, type: "Low" },
  { time: "23:48", height: 1.8, type: "High" },
];

export const alerts = [
  { type: "Heat", title: "High UV around noon", text: "UV index may reach 7. Use sun protection.", level: "medium" },
  { type: "Rain", title: "Rain possible Wednesday", text: "Carry an umbrella if you're heading outdoors.", level: "info" },
];