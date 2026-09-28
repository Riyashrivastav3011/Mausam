import React from "react";
export default function ResponsiveGrid({ children, className = "" }) {
  return <div className={`responsive-grid ${className}`}>{children}</div>;
}