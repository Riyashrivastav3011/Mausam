import React from "react";
import Card from "../common/Card";
import { Sunrise, Sunset, Sun } from "lucide-react";

export default function SunPathIndicator() {
  return <Card className="sun-card"><div className="card-heading"><div><span className="eyebrow">DAYLIGHT</span><h3>Sun path</h3></div><span className="subtle">12h 04m daylight</span></div>
    <div className="sun-arc"><div className="arc-line"/><div className="sun-dot"><Sun size={20}/></div></div>
    <div className="sun-times"><span><Sunrise size={17}/><b>06:08 AM</b><small>Sunrise</small></span><span><Sunset size={17}/><b>06:12 PM</b><small>Sunset</small></span></div>
  </Card>;
}