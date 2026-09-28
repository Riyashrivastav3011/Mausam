import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomeScreen from "./screens/Home/HomeScreen";
import PersonalizationScreen from "./screens/Personalization/PersonalizationScreen";
import LocationScreen from "./screens/Location/LocationScreen";

import Login from "./components/common/Login";
import Signup from "./components/common/Signup";

import ForecastScreen from "./screens/Forecast/ForecastScreen";
import AlertsScreen from "./screens/Alerts/AlertsScreen";
import SavedLocationsScreen from "./screens/SavedLocations/SavedLocationsScreen";
import SettingsScreen from "./screens/Settings/SettingsScreen";

export default function App() {
  return (
    <Routes>

      {/* Default page */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />

      {/* Main pages */}
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/personalization" element={<PersonalizationScreen />} />
      <Route path="/location" element={<LocationScreen />} />
      <Route path="/forecast" element={<ForecastScreen />} />
      <Route path="/alerts" element={<AlertsScreen />} />
      <Route path="/locations" element={<SavedLocationsScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />

      {/* Unknown URL */}
      <Route path="*" element={<Navigate to="/home" replace />} />

    </Routes>
  );
}