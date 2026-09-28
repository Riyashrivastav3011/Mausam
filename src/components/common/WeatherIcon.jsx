import React from "react";
import { getWeatherEmoji } from "../../utils/weather";

export default function WeatherIcon({ type = "partly", size = "medium" }) {
  return <span className={`weather-emoji weather-emoji-${size}`} aria-label="weather">{getWeatherEmoji(type)}</span>;
}