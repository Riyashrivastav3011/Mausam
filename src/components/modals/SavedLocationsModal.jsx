import React from "react";
export default function SavedLocationsModal({ open, onClose }) {
  if (!open) return null;
  return <div className="modal-backdrop" onClick={onClose}><div className="modal" onClick={(e) => e.stopPropagation()}>
    <h3>Saved locations</h3><button className="saved-location">📍 New Delhi <span>Current</span></button><button className="saved-location">📍 London <span>18°C</span></button><button className="saved-location">📍 Mumbai <span>29°C</span></button><button className="primary-btn" onClick={onClose}>Done</button>
  </div></div>;
}