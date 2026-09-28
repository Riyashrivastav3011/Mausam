import React from "react";
import { CarFront, Eye, TrafficCone } from "lucide-react";
import Card from "../common/Card";

export default function CommuterWidget() {
  return <Card className="segment-card">
    <div className="segment-icon"><CarFront /></div><span className="widget-tag">COMMUTER</span>
    <h3>Road conditions</h3><p>Good visibility and dry roads are expected for your evening commute.</p>
    <div className="commute-row"><span><Eye size={16}/> Visibility <b>8.4 km</b></span><span><TrafficCone size={16}/> Road <b>Clear</b></span></div>
  </Card>;
}