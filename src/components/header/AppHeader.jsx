import React, { useState } from "react";
import {
  Bell,
  MapPin,
  Menu,
  Search,
  Settings,
  SunMedium,
  X,
  LogIn,
  UserPlus,
} from "lucide-react";
import './header.css'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function AppHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="app-header">
      <div className="header-inner">

        {/* Logo */}
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">
            <SunMedium size={21} />
          </span>
          <span>Mausam</span>
        </Link>

        {/* Desktop Location */}
        <div className="desktop-location">
          <MapPin size={17} />

          <div>
            <span>Current location</span>
            <strong>New Delhi, India</strong>
          </div>
        </div>

        {/* Search */}
        <div className="header-search">
          <Search size={18} />

          <input
            placeholder="Search city or destination..."
          />
        </div>

        {/* Desktop Actions */}
        <div className="header-actions">

          {/* Notifications */}
          <Link
            to="/alerts"
            className="icon-btn"
            aria-label="Notifications"
          >
            <Bell size={19} />
          </Link>

          {/* Settings */}
          <Link
            to="/settings"
            className="icon-btn"
            aria-label="Settings"
          >
            <Settings size={19} />
          </Link>

          {/* Login */}
          <Link to="/login" className="login-btn">
            <LogIn size={17} />
            Login
          </Link>

          {/* Signup */}
          <Link to="/register" className="signup-btn">
            <UserPlus size={17} />
            Signup
          </Link>

        </div>

        {/* Mobile Menu */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >

            {/* Location */}
            <div className="mobile-location">
              <MapPin size={17} />
              New Delhi, India
            </div>

            {/* Search */}
            <div className="mobile-search">
              <Search size={17} />

              <input
                placeholder="Search destination..."
              />
            </div>

            {/* Notifications */}
            <Link
              to="/alerts"
              className="mobile-settings"
              onClick={closeMenu}
            >
              <Bell size={17} />
              Notifications
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="mobile-login"
              onClick={closeMenu}
            >
              <LogIn size={17} />
              Login
            </Link>

            {/* Signup */}
            <Link
              to="/register"
              className="mobile-signup"
              onClick={closeMenu}
            >
              <UserPlus size={17} />
              Signup
            </Link>

            {/* Settings */}
            <Link
              to="/settings"
              className="mobile-settings"
              onClick={closeMenu}
            >
              <Settings size={17} />
              Settings
            </Link>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}