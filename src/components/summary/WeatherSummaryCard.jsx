import React from "react";
import { Droplets, Eye, Gauge, Wind } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../common/Card";
import WeatherIcon from "../common/WeatherIcon";
import { useWeather } from "../../context/WeatherContext";

export default function WeatherSummaryCard() {
  const { weather } = useWeather();
  if (!weather) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="hero-weather-card">
        <div className="hero-top">
          <div>
            <span className="eyebrow">TODAY · MON, 27 SEP</span>
            <h1>{weather.city}</h1>
            <p>{weather.country}</p>
          </div>
          <div className="hero-condition">
            <WeatherIcon type="partly" size="large" />
            <div><strong>{weather.temperature}°</strong><span>{weather.condition}</span></div>
          </div>
        </div>

        <div className="hero-bottom">
          <div><span>Feels like</span><strong>{weather.feelsLike}°</strong></div>
          <div><span>High / Low</span><strong>{weather.high}° / {weather.low}°</strong></div>
          <div><span>Sunrise</span><strong>{weather.sunrise}</strong></div>
          <div><span>Sunset</span><strong>{weather.sunset}</strong></div>
        </div>

        <div className="summary-mini-stats">
          <span><Droplets size={16} /> {weather.humidity}% Humidity</span>
          <span><Wind size={16} /> {weather.wind} km/h Wind</span>
          <span><Eye size={16} /> {weather.visibility} km Visibility</span>
          <span><Gauge size={16} /> {weather.pressure} hPa</span>
        </div>
      </Card>
    </motion.div>
  );
}