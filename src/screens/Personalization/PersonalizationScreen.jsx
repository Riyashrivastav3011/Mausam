import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeartPulse, Dumbbell, Umbrella, Plane, Users, Sprout, Car, CalendarDays, ArrowRight } from "lucide-react";
import PageShell from "../../components/common/PageShell";

const options = [
  ["health","Health & AQI","Air quality, UV, pollen and humidity.",HeartPulse],
  ["fitness","Outdoor Fitness","Running conditions, wind and heat.",Dumbbell],
  ["beach","Beach & Surf","Tides, waves and sea conditions.",Umbrella],
  ["travel","Travel","Destination weather and travel alerts.",Plane],
  ["family","Family","School commute and severe warnings.",Users],
  ["agriculture","Agriculture","Rainfall, frost and planting guidance.",Sprout],
  ["commute","Commuting","Visibility, fog, storms and travel weather.",Car],
  ["events","Events","Rain probability and comfort index.",CalendarDays],
];

export default function PersonalizationScreen() {
  const [selected, setSelected] = useState(["health","fitness"]);
  const navigate = useNavigate();

  const toggle = (id) => setSelected((old) => old.includes(id) ? old.filter(x => x !== id) : [...old, id]);

  return (
    <PageShell title="Make Mausam yours" subtitle="Choose the information you care about. Your homepage will prioritize these insights.">
      <div className="page-card">
        <div className="progress-row"><span>Step 1 of 2</span><span>{selected.length} selected</span></div>
        <div className="progress-bar"><div className="progress-fill" style={{width:"50%"}} /></div>

        <div className="option-grid">
          {options.map(([id,title,desc,Icon]) => (
            <button key={id} className={`option-card ${selected.includes(id) ? "selected" : ""}`} onClick={() => toggle(id)}>
              <span className="option-icon"><Icon size={21}/></span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </button>
          ))}
        </div>

        <div className="step-actions">
          <Link className="secondary-btn" to="/home">Skip for now</Link>
          <button className="primary-btn" onClick={() => navigate("/location")}>Continue <ArrowRight size={17}/></button>
        </div>
      </div>
    </PageShell>
  );
}
