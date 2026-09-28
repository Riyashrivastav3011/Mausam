import React from "react";
import Card from "../common/Card";
import WeatherIcon from "../common/WeatherIcon";
import { useWeather } from "../../context/WeatherContext";

export default function ForecastStrip() {
  const { forecast } = useWeather();
  return (
    <Card className="forecast-card">
      <div className="card-heading"><div><span className="eyebrow">7-DAY FORECAST</span><h3>Weather outlook</h3></div><span className="subtle">Next 7 days</span></div>
      <div className="forecast-strip">
        {forecast.map((day) => (
          <div className="forecast-day" key={day.day}>
            <span>{day.day}</span>
            <WeatherIcon type={day.icon} size="small" />
            <strong>{day.high}°</strong><small>{day.low}°</small>
            <em>💧 {day.rain}%</em>
          </div>
        ))}
      </div>
    </Card>
  );
}