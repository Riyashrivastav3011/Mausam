import React from "react";
export default function ComfortIndexGauge({ score = 82 }) {
  const degree = Math.min(score, 100) * 1.8 - 90;
  return (
    <div className="comfort-gauge">
      <div className="gauge-ring" style={{ "--gauge-angle": `${degree}deg` }}>
        <div className="gauge-center">
          <strong>{score}</strong>
          <span>/100</span>
        </div>
      </div>
      <p>Comfort Index</p>
    </div>
  );
}