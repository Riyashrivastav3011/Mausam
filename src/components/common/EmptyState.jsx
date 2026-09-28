import React from "react";
export default function EmptyState({ title = "Nothing here yet", text = "Check back later for updated weather information." }) {
  return <div className="empty-state"><strong>{title}</strong><span>{text}</span></div>;
}