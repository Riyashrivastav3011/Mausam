import React from "react";
import { AlertTriangle, ChevronRight, CloudRain } from "lucide-react";
import { motion } from "framer-motion";

export default function AlertBanner({ alert }) {
  const Icon = alert.type === "Rain" ? CloudRain : AlertTriangle;

  return (
    <motion.div
      className={`alert-banner alert-${alert.level}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="alert-icon"><Icon size={20} /></span>
      <div className="alert-copy">
        <strong>{alert.title}</strong>
        <span>{alert.text}</span>
      </div>
      <button aria-label="View alert"><ChevronRight size={19} /></button>
    </motion.div>
  );
}