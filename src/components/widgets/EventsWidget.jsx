import React from "react";
import { CalendarDays, CloudSun, Umbrella } from "lucide-react";
import Card from "../common/Card";
import ComfortIndexGauge from "../common/ComfortIndexGauge";

export default function EventsWidget() {
  return <Card className="segment-card">
    <div className="segment-icon"><CalendarDays /></div><span className="widget-tag">EVENTS</span>
    <h3>Saturday outdoor event</h3><p>Mostly sunny and comfortable. Low rain probability.</p>
    <div className="event-row"><span><CloudSun size={17}/> 32°C</span><span><Umbrella size={17}/> 8% rain</span><ComfortIndexGauge score={88}/></div>
  </Card>;
}