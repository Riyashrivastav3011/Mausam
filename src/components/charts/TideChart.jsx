import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Card from "../common/Card";
import { useWeather } from "../../context/WeatherContext";

export default function TideChart() {
  const { tides } = useWeather();
  return <Card className="chart-card"><div className="card-heading"><div><span className="eyebrow">OCEAN</span><h3>Tide timings</h3></div><span className="subtle">Today</span></div>
    <div className="chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={tides}><CartesianGrid vertical={false} stroke="#e8eef5"/><XAxis dataKey="time" tickLine={false} axisLine={false} tick={{fontSize:11,fill:"#8290a3"}}/><YAxis hide/><Tooltip/><Area type="monotone" dataKey="height" stroke="#4fb8a8" fill="#e4f8f4" strokeWidth={2.5}/></AreaChart></ResponsiveContainer></div>
  </Card>;
}