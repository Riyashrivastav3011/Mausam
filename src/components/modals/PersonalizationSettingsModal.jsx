import React from "react";
export default function PersonalizationSettingsModal({ open, onClose }) {
  if (!open) return null;
  return <div className="modal-backdrop" onClick={onClose}><div className="modal" onClick={(e) => e.stopPropagation()}>
    <h3>Personalize Mausam</h3><p>Select the information you care about most.</p>
    {["Health & air quality","Outdoor fitness","Travel","Family","Agriculture","Commuting","Events"].map((x) => <label key={x}><input type="checkbox" defaultChecked/> {x}</label>)}
    <button className="primary-btn" onClick={onClose}>Save preferences</button>
  </div></div>;
}