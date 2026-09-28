import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Card from "../common/Card";
import { useWeather } from "../../context/WeatherContext";

export default function RainProbabilityChart() {
  const { rain } = useWeather();
  return <Card className="chart-card"><div className="card-heading"><div><span className="eyebrow">PRECIPITATION</span><h3>Rain probability</h3></div><span className="chart-value">20%</span></div>
    <div className="chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={rain}><CartesianGrid vertical={false} stroke="#e8eef5"/><XAxis dataKey="time" tickLine={false} axisLine={false} tick={{fontSize:11,fill:"#8290a3"}}/><YAxis hide domain={[0,60]}/><Tooltip/><Area type="monotone" dataKey="rain" stroke="#5b9bea" fill="#e8f3ff" strokeWidth={2.5} /></AreaChart></ResponsiveContainer></div>
  </Card>;
}