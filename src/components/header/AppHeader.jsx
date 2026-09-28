import React from "react";
import { Bell, MapPin, Menu, Search, Settings, SunMedium, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="app-header">
      <div className="header-inner">
        <a className="brand" href="/">
          <span className="brand-mark"><SunMedium size={21} /></span>
          <span>Mausam</span>
        </a>

        <div className="desktop-location">
          <MapPin size={17} />
          <div><span>Current location</span><strong>New Delhi, India</strong></div>
        </div>

        <div className="header-search">
          <Search size={18} />
          <input placeholder="Search city or destination..." />
        </div>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Notifications"><Bell size={19} /></button>
          <button className="icon-btn" aria-label="Settings"><Settings size={19} /></button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="mobile-location"><MapPin size={17} /> New Delhi, India</div>
            <div className="mobile-search"><Search size={17} /><input placeholder="Search destination..." /></div>
            <button><Bell size={17} /> Notifications</button>
            <button><Settings size={17} /> Settings</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}