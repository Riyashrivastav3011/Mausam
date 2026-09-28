import React from "react";
import { CloudRain, School, Users } from "lucide-react";
import Card from "../common/Card";

export default function FamilyWidget() {
  return <Card className="segment-card">
    <div className="segment-icon"><Users /></div><span className="widget-tag">FAMILY</span>
    <h3>School commute</h3><p>Morning commute looks clear with no severe weather alerts.</p>
    <div className="family-row"><span><School size={16}/> 7:30 AM</span><b>Clear</b><span><CloudRain size={16}/> Rain 10%</span></div>
  </Card>;
}