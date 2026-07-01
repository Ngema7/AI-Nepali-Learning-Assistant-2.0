import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import OnboardingPage from "../pages/OnboardingPage";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/onboarding" element={
        <PrivateRoute>
          <OnboardingPage />
        </PrivateRoute>
      } />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
    </Routes>
  );
};

export default AppRoutes;