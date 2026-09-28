import React from "react";
import { Briefcase, Luggage, Plane } from "lucide-react";
import Card from "../common/Card";

export default function TravelWidget() {
  return <Card className="segment-card">
    <div className="segment-icon"><Plane /></div><span className="widget-tag">TRAVEL</span>
    <h3>London trip</h3><p>Cool with a chance of rain tomorrow. Pack light layers.</p>
    <div className="travel-weather"><span>🌦️</span><div><strong>18°C</strong><small>Rain chance 62%</small></div></div>
    <div className="packing"><Luggage size={16}/><span><b>Packing tip:</b> carry a raincoat.</span></div>
  </Card>;
}