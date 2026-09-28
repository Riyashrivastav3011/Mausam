import React from "react";
import { Activity, Droplets, Sun, Wind } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../common/Card";
import { useWeather } from "../../context/WeatherContext";

const stats = [
  { key: "aqi", label: "Air Quality", icon: Activity, suffix: "", status: "Moderate" },
  { key: "uv", label: "UV Index", icon: Sun, suffix: "", status: "High at noon" },
  { key: "humidity", label: "Humidity", icon: Droplets, suffix: "%", status: "Comfortable" },
  { key: "wind", label: "Wind", icon: Wind, suffix: " km/h", status: "Light breeze" },
];

export default function QuickStatsRow() {
  const { weather } = useWeather();
  if (!weather) return null;

  const values = { aqi: weather.aqi, uv: weather.uv, humidity: weather.humidity, wind: weather.wind };

  return (
    <div className="quick-stats-grid">
      {stats.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div key={item.key} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
            <Card className="quick-stat">
              <div className="stat-icon"><Icon size={20} /></div>
              <div><span>{item.label}</span><strong>{values[item.key]}{item.suffix}</strong><small>{item.key === "aqi" ? weather.aqiLabel : item.status}</small></div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}