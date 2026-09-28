import React from "react";
import { MapPin, ChevronDown } from "lucide-react";

export default function LocationSelector() {
  return <button className="location-selector"><MapPin size={17} /><span>New Delhi</span><ChevronDown size={15} /></button>;
}