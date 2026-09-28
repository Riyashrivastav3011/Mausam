import React from "react";
import { Link } from "react-router-dom";
import { Droplets, Wind, Sun, CloudRain } from "lucide-react";
import PageShell from "../../components/common/PageShell";
import WeatherIcon from "../../components/common/WeatherIcon";

const days = [
  ["Today","28°","Sunny","20°","32°","10%"],
  ["Tue","27°","Partly Cloudy","21°","31°","20%"],
  ["Wed","25°","Cloudy","20°","28°","45%"],
  ["Thu","24°","Light Rain","19°","27°","70%"],
  ["Fri","26°","Partly Cloudy","20°","30°","35%"],
  ["Sat","29°","Sunny","21°","33°","10%"],
  ["Sun","30°","Sunny","22°","34°","5%"],
];

export default function ForecastScreen() {
  return (
    <PageShell title="Detailed forecast" subtitle="A simple view of the next 7 days, with the weather details that matter most.">
      <div className="page-grid">
        <section className="page-card">
          <h2>New Delhi · 7-day forecast</h2>
          <p>Updated just now</p>
          <div className="forecast-list">
            {days.map(([day,temp,condition,low,high,rain]) => (
              <div className="forecast-row" key={day}>
                <strong>{day}</strong>
                <span><WeatherIcon condition={condition} /> {condition}</span>
                <span>{low} / {high}</span>
                <span><Droplets size={14} /> {rain}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{display:"grid",gap:18}}>
          <section className="page-card">
            <h2><CloudRain size={19}/> Rain probability</h2>
            <p>Rain chances rise around Thursday. Plan outdoor activities accordingly.</p>
            <div className="progress-bar"><div className="progress-fill" style={{width:"70%"}} /></div>
            <strong>Thursday · 70%</strong>
          </section>
          <section className="page-card">
            <h2><Sun size={19}/> Sun & comfort</h2>
            <p>Sunrise 6:04 AM · Sunset 6:16 PM</p>
            <p><Wind size={15}/> Moderate wind · 14 km/h</p>
          </section>
        </div>
      </div>
      <div style={{marginTop:20}}><Link className="secondary-btn" to="/home">← Back to dashboard</Link></div>
    </PageShell>
  );
}
