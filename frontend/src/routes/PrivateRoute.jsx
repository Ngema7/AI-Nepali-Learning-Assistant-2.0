import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div style={{ 
    display: "flex", justifyContent: "center", 
    alignItems: "center", height: "100vh", 
    fontSize: "18px" 
  }}>Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  // ✅ Onboarding चेक हटाएर सिधै सुरक्षित पेज खोल्ने बनाइयो
  return children;
};

export default PrivateRoute;