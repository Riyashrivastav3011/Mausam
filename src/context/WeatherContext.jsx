import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentWeather, getForecast, getRainProbability, getTides } from "../services/weatherApi";

const WeatherContext = createContext(null);

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [rain, setRain] = useState([]);
  const [tides, setTides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [unit, setUnit] = useState("C");

  useEffect(() => {
    Promise.all([getCurrentWeather(), getForecast(), getRainProbability(), getTides()])
      .then(([current, days, rainData, tideData]) => {
        setWeather(current);
        setForecast(days);
        setRain(rainData);
        setTides(tideData);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, forecast, rain, tides, loading, unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => useContext(WeatherContext);