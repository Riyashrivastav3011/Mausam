import React from "react";
export default function LoadingSkeleton({ height = 180 }) {
  return <div className="skeleton" style={{ minHeight: height }} />;
}