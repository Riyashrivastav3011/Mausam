import React from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  return <div className="search-bar"><Search size={18} /><input placeholder="Search city, place or destination" /></div>;
}