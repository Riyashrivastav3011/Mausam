import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, MapPin, SlidersHorizontal, Thermometer, UserRound } from "lucide-react";
import PageShell from "../../components/common/PageShell";

export default function SettingsScreen() {
  const [notifications,setNotifications] = useState(true);
  const [severe,setSevere] = useState(true);
  const [celsius,setCelsius] = useState(true);

  return (
    <PageShell title="Profile & settings" subtitle="Manage your Mausam preferences and personalize the way weather is shown.">
      <div className="page-grid">
        <section className="page-card">
          <h2><UserRound size={19}/> Profile</h2>
          <div className="setting-list">
            <div className="setting-row"><div className="setting-copy"><strong>Weather profile</strong><span>Health + Fitness interests</span></div><Link to="/personalization" className="secondary-btn">Edit</Link></div>
            <div className="setting-row"><div className="setting-copy"><strong>Home location</strong><span>New Delhi, India</span></div><Link to="/location" className="secondary-btn">Change</Link></div>
          </div>
        </section>

        <section className="page-card">
          <h2><SlidersHorizontal size={19}/> Preferences</h2>
          <div className="setting-list">
            <SettingRow icon={<Bell size={18}/>} title="Weather notifications" text="Receive useful daily updates" value={notifications} setValue={setNotifications}/>
            <SettingRow icon={<Bell size={18}/>} title="Severe weather alerts" text="Prioritize important warnings" value={severe} setValue={setSevere}/>
            <SettingRow icon={<Thermometer size={18}/>} title="Temperature unit" text={celsius ? "Celsius (°C)" : "Fahrenheit (°F)"} value={celsius} setValue={setCelsius}/>
          </div>
        </section>
      </div>
      <div className="page-card" style={{marginTop:18}}>
        <h2><MapPin size={19}/> Your weather experience</h2>
        <p>Mausam uses your interests, saved locations and weather conditions to prioritize the cards shown on your homepage.</p>
        <Link to="/home" className="primary-btn">Back to Mausam Home</Link>
      </div>
    </PageShell>
  );
}

function SettingRow({icon,title,text,value,setValue}) {
  return (
    <div className="setting-row">
      <div className="setting-copy" style={{display:"flex",gap:12,alignItems:"center"}}>
        <span className="option-icon" style={{width:38,height:38,margin:0}}>{icon}</span>
        <span><strong>{title}</strong><span>{text}</span></span>
      </div>
      <button className={`toggle ${value ? "on" : ""}`} onClick={() => setValue(!value)} aria-label={title}>
        <span />
      </button>
    </div>
  );
}
