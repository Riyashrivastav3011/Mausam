import React from "react";
export default function AlertDetailModal({ alert, onClose }) {
  if (!alert) return null;
  return <div className="modal-backdrop" onClick={onClose}><div className="modal" onClick={(e) => e.stopPropagation()}>
    <span className="eyebrow">WEATHER ALERT</span><h3>{alert.title}</h3><p>{alert.text}</p><button className="primary-btn" onClick={onClose}>Close</button>
  </div></div>;
}