import React from "react";
import { Waves, Wind } from "lucide-react";
import Card from "../common/Card";

export default function BeachWidget() {
  return <Card className="segment-card">
    <div className="segment-icon"><Waves /></div><span className="widget-tag">BEACH & SURF</span>
    <h3>Sea conditions</h3><p>Calm conditions expected through the afternoon.</p>
    <div className="three-metrics"><div><b>1.2 m</b><small>Wave height</small></div><div><b>27°C</b><small>Water temp</small></div><div><b>12 km/h</b><small><Wind size={13}/> Wind</small></div></div>
    <div className="tide-pill"><span>Next high tide</span><strong>12:42 · 2.2 m</strong></div>
  </Card>;
}