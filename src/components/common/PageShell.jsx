import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, MapPin, Settings, CloudSun } from "lucide-react";

export default function PageShell({ title, subtitle, children, showBack = false }) {
  const location = useLocation();

  return (
    <div className="app-page">
      <header className="page-topbar">
        <Link to="/home" className="page-brand">
          <span className="brand-mark"><CloudSun size={21} /></span>
          <span>Mausam</span>
        </Link>

        <nav className="page-nav">
          <Link className={location.pathname === "/home" ? "active" : ""} to="/home">Home</Link>
          <Link className={location.pathname === "/forecast" ? "active" : ""} to="/forecast">Forecast</Link>
          <Link className={location.pathname === "/alerts" ? "active" : ""} to="/alerts">Alerts</Link>
          <Link className={location.pathname === "/locations" ? "active" : ""} to="/locations">Locations</Link>
        </nav>

        <div className="page-actions">
          <Link to="/alerts" className="icon-action" aria-label="Alerts"><Bell size={19} /></Link>
          <Link to="/settings" className="icon-action" aria-label="Settings"><Settings size={19} /></Link>
        </div>
      </header>

      <main className="page-container">
        {showBack && (
          <Link to="/home" className="back-link">← Back to Home</Link>
        )}
        <div className="page-heading">
          <div>
            <p className="eyebrow">MAUSAM • PERSONALIZED WEATHER</p>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
