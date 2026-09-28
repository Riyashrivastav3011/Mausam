import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, CloudRain, Wind, BellRing } from "lucide-react";
import PageShell from "../../components/common/PageShell";

const alerts = [
  {type:"info",title:"Rain expected Thursday",badge:"Weather",icon:CloudRain,text:"There is a 70% chance of rain. Outdoor plans may need adjustment."},
  {type:"",title:"High UV around noon",badge:"Health",icon:AlertTriangle,text:"UV levels may be high between 11 AM and 2 PM. Consider sun protection."},
  {type:"",title:"Strong wind advisory",badge:"Outdoor",icon:Wind,text:"Wind may reach 28 km/h in the afternoon. Check conditions before outdoor activities."},
];

export default function AlertsScreen() {
  return (
    <PageShell title="Weather alerts" subtitle="Important conditions and personalized warnings for your selected location.">
      <div className="alert-list">
        {alerts.map(({type,title,badge,icon:Icon,text}) => (
          <article className={`alert-card ${type}`} key={title}>
            <div className="alert-top">
              <div className="alert-title"><Icon size={20}/>{title}</div>
              <span className="alert-badge">{badge}</span>
            </div>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="page-card" style={{marginTop:18}}>
        <div className="alert-title"><BellRing size={20}/> Alert preferences</div>
        <p>Choose which weather events should appear on your Mausam homepage and notifications.</p>
        <Link to="/settings" className="secondary-btn">Manage preferences</Link>
      </div>
    </PageShell>
  );
}
