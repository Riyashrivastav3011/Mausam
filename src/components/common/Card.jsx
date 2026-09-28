import React from "react";
export default function Card({ children, className = "", ...props }) {
  return <section className={`weather-card ${className}`} {...props}>{children}</section>;
}