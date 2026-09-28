import React from "react";
import { HeartPulse, Leaf, Wind } from "lucide-react";
import Card from "../common/Card";

export default function HealthWidget() {
  return <Card className="segment-card health-widget">
    <div className="segment-icon"><HeartPulse /></div><span className="widget-tag">HEALTH</span>
    <h3>Air & allergy watch</h3><p>Air quality is moderate. Sensitive users may notice irritation outdoors.</p>
    <div className="widget-metrics"><span><Wind size={15}/> AQI <b>74</b></span><span><Leaf size={15}/> Pollen <b>Low</b></span></div>
    <div className="progress"><span style={{width:"58%"}} /></div><small>Consider outdoor activity before noon.</small>
  </Card>;
}