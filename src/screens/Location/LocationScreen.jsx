import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Navigation, Search, Check } from "lucide-react";
import PageShell from "../../components/common/PageShell";

const cities = [
  ["New Delhi", "Delhi, India"],
  ["Mumbai", "Maharashtra, India"],
  ["Bengaluru", "Karnataka, India"],
  ["Lucknow", "Uttar Pradesh, India"],
  ["Jaipur", "Rajasthan, India"],
  ["Kolkata", "West Bengal, India"],
];

export default function LocationScreen() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("New Delhi");
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const filtered = cities.filter(([city, state]) =>
    `${city} ${state}`.toLowerCase().includes(query.toLowerCase())
  );

  // "Use current location" button
  const useCurrentLocation = () => {
    setError("");

    if (!navigator.geolocation) {
      setError("Your browser does not support location.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
        setSelected("Current Location");
      },
      () => setError("Location permission denied. Please choose a city.")
    );
  };

  // "Open My Mausam" button
  const handleContinue = async () => {
    setError("");

    let body;

    if (selected === "Current Location") {
      if (!coords) {
        setError("Could not get your location. Please choose a city.");
        return;
      }
      body = {
        city: "Current Location",
        state: "",
        latitude: coords.lat,
        longitude: coords.lon,
      };
    } else {
      const found = cities.find(([city]) => city === selected);
      body = { city: found[0], state: found[1] };
    }

    setLoading(true);

    try {
     const response = await fetch(
  `${import.meta.env.VITE_API_URL}/auth/savelocation`,
  {
    method: "PUT",
    credentials:"include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }
);

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Could not save location");
        setLoading(false);
        return;
      }

      navigate("/home");
    } catch (err) {
      setError("Cannot connect to server. Is the backend running?");
    }

    setLoading(false);
  };

  return (
    <PageShell
      title="Choose your location"
      subtitle="Mausam uses your selected location to show relevant forecasts, conditions and alerts."
    >
      <div className="page-grid">
        <section className="page-card">
          <h2>Find a location</h2>
          <p>Search for your city or use your current location.</p>

          <div className="location-search">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search city..."
            />
            <button className="primary-btn" onClick={() => {}}>
              <Search size={17} />
            </button>
          </div>

          <button className="secondary-btn" onClick={useCurrentLocation}>
            <Navigation size={17} /> Use current location
          </button>
        </section>

        <section className="page-card">
          <h2>Popular locations</h2>
          <p>Select one to continue.</p>

          <div className="location-list">
            {filtered.map(([city, state]) => (
              <button
                key={city}
                className="location-item"
                onClick={() => setSelected(city)}
              >
                <span className="location-info">
                  <span className="location-pin">
                    <MapPin size={18} />
                  </span>
                  <span>
                    <strong>{city}</strong>
                    <span>{state}</span>
                  </span>
                </span>
                {selected === city && <Check size={19} color="#4fb8a8" />}
              </button>
            ))}
          </div>
        </section>
      </div>

      {error && <p style={{ color: "red", marginTop: "12px" }}>{error}</p>}

      <div className="step-actions">
        <button
          className="secondary-btn"
          onClick={() => navigate("/personalization")}
        >
          ← Back
        </button>

        <button
          className="primary-btn"
          onClick={handleContinue}
          disabled={loading}
        >
          {loading ? "Saving..." : "Open My Mausam"} <ArrowRightIcon />
        </button>
      </div>
    </PageShell>
  );
}

function ArrowRightIcon() {
  return <span aria-hidden="true">→</span>;
}