import { currentWeather, forecast, hourlyRain, tides } from "../constants/weather";

const wait = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCurrentWeather() {
  await wait();
  return currentWeather;
}

export async function getForecast() {
  await wait();
  return forecast;
}

export async function getRainProbability() {
  await wait();
  return hourlyRain;
}

export async function getTides() {
  await wait();
  return tides;
}

// Replace these mock functions with fetch/axios calls later.
// Example:
// const response = await fetch(`${import.meta.env.VITE_API_URL}/weather?...`);
// return response.json();