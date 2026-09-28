import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Plus, Star } from "lucide-react";
import PageShell from "../../components/common/PageShell";

const places = [
  ["New Delhi","28°C","Clear","Primary"],
  ["Mumbai","27°C","Cloudy","Saved"],
  ["Lucknow","29°C","Partly cloudy","Saved"],
];

export default function SavedLocationsScreen() {
  return (
    <PageShell title="Saved locations" subtitle="Keep the places that matter to you one tap away.">
      <div className="saved-grid">
        {places.map(([city,temp,condition,label],i) => (
          <article className="saved-card" key={city}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span className="city"><MapPin size={17}/> {city}</span>
              {i === 0 ? <Star size={17} fill="#5b9bea" color="#5b9bea"/> : <span style={{fontSize:".72rem",color:"#8a97a8"}}>{label}</span>}
            </div>
            <div className="temp">{temp}</div>
            <small>{condition}</small>
            <div style={{marginTop:16}}><Link to="/home" className="secondary-btn">View weather</Link></div>
          </article>
        ))}
        <article className="saved-card" style={{borderStyle:"dashed"}}>
          <div className="location-pin"><Plus size={19}/></div>
          <h3>Add another location</h3>
          <p>Save a city, destination or workplace for quick access.</p>
          <Link to="/location" className="primary-btn">Add location</Link>
        </article>
      </div>
    </PageShell>
  );
}
