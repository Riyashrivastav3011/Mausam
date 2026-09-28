import React from "react";
import { Dumbbell, Sunrise, Wind } from "lucide-react";
import Card from "../common/Card";
import ComfortIndexGauge from "../common/ComfortIndexGauge";

export default function FitnessWidget() {
  return <Card className="segment-card fitness-widget">
    <div className="segment-icon"><Dumbbell /></div><span className="widget-tag">FITNESS</span>
    <h3>Best time to run</h3><p>Early morning offers cooler temperatures and lighter wind.</p>
    <div className="fitness-row"><div><Sunrise size={17}/><b>6:30–8:00 AM</b><small>Recommended</small></div><ComfortIndexGauge score={84}/></div>
  </Card>;
}