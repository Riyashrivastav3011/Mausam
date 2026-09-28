import React from "react";
import { Droplets, Sprout, ThermometerSun } from "lucide-react";
import Card from "../common/Card";

export default function AgricultureWidget() {
  return <Card className="segment-card">
    <div className="segment-icon"><Sprout /></div><span className="widget-tag">AGRICULTURE</span>
    <h3>Garden planner</h3><p>Rain is unlikely today. Your plants may need watering.</p>
    <div className="agri-row"><span><Droplets size={17}/><b>31%</b><small>Soil moisture</small></span><span><ThermometerSun size={17}/><b>Low</b><small>Frost risk</small></span></div>
    <button className="text-button">View planting guidance →</button>
  </Card>;
}