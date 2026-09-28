import React from "react";
import { motion } from "framer-motion";
import { Settings2, MapPinned } from "lucide-react";
import { useState } from "react";
import AppHeader from "../../components/header/AppHeader";
import WeatherSummaryCard from "../../components/summary/WeatherSummaryCard";
import QuickStatsRow from "../../components/summary/QuickStatsRow";
import ForecastStrip from "../../components/summary/ForecastStrip";
import AlertBanner from "../../components/common/AlertBanner";
import UnitToggle from "../../components/common/UnitToggle";
import SectionHeader from "../../components/common/SectionHeader";
import ResponsiveGrid from "../../layouts/ResponsiveGrid";
import RainProbabilityChart from "../../components/charts/RainProbabilityChart";
import TideChart from "../../components/charts/TideChart";
import SunPathIndicator from "../../components/charts/SunPathIndicator";
import HealthWidget from "../../components/widgets/HealthWidget";
import FitnessWidget from "../../components/widgets/FitnessWidget";
import BeachWidget from "../../components/widgets/BeachWidget";
import TravelWidget from "../../components/widgets/TravelWidget";
import FamilyWidget from "../../components/widgets/FamilyWidget";
import AgricultureWidget from "../../components/widgets/AgricultureWidget";
import CommuterWidget from "../../components/widgets/CommuterWidget";
import EventsWidget from "../../components/widgets/EventsWidget";
import PersonalizationSettingsModal from "../../components/modals/PersonalizationSettingsModal";
import { alerts } from "../../constants/weather";
import { WeatherProvider, useWeather } from "../../context/WeatherContext";
import "../../styles/home.css";

function HomeContent() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { unit, setUnit } = useWeather();

  return (
    <>
      <AppHeader />
      <main className="home-page">
        <div className="page-container">
          <motion.div className="welcome-row" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <div><span className="eyebrow">GOOD MORNING</span><h2>Your weather, your way.</h2><p>Personalized insights for everything you have planned today.</p></div>
            <div className="top-controls"><UnitToggle unit={unit} setUnit={setUnit}/><button className="settings-btn" onClick={() => setSettingsOpen(true)}><Settings2 size={17}/> Personalize</button></div>
          </motion.div>

          <div className="hero-grid">
            <WeatherSummaryCard />
            <div className="alerts-column">
              {alerts.map((alert) => <AlertBanner key={alert.title} alert={alert} />)}
              <div className="location-note"><MapPinned size={17}/><span>Weather insights are personalized for <b>New Delhi</b>.</span></div>
            </div>
          </div>

          <QuickStatsRow />
          <ForecastStrip />

          <SectionHeader eyebrow="FOR YOU" title="Personalized weather insights" description="Mausam adapts your homepage around the activities that matter to you." />
          <ResponsiveGrid className="widgets-grid">
            <HealthWidget/><FitnessWidget/><BeachWidget/><TravelWidget/>
            <FamilyWidget/><AgricultureWidget/><CommuterWidget/><EventsWidget/>
          </ResponsiveGrid>

          <SectionHeader eyebrow="WEATHER INTELLIGENCE" title="Explore the forecast" description="Understand what is changing throughout the day." />
          <ResponsiveGrid className="charts-grid">
            <RainProbabilityChart/><TideChart/><SunPathIndicator/>
          </ResponsiveGrid>
        </div>
      </main>
      <footer className="app-footer"><div><span className="brand-mark small">☀</span><b>Mausam</b></div><span>Personalized weather intelligence</span><span>© 2026</span></footer>
      <PersonalizationSettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
}

export default function HomeScreen() {
  return <WeatherProvider><HomeContent /></WeatherProvider>;
}