import React from "react";
export default function UnitToggle({ unit, setUnit }) {
  return (
    <div className="unit-toggle">
      <button className={unit === "C" ? "active" : ""} onClick={() => setUnit("C")}>°C</button>
      <button className={unit === "F" ? "active" : ""} onClick={() => setUnit("F")}>°F</button>
    </div>
  );
}