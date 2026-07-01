import React, { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser, getCurrentUser, logoutUser } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      // ✅ Google OAuth le URL ma token pathauxa - tyo catch garne
      const urlParams = new URLSearchParams(window.location.search);
      const urlToken = urlParams.get("token");

      if (urlToken) {
        localStorage.setItem("token", urlToken);
        // URL clean garne
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await getCurrentUser();
          setUser(res.user);
        } catch {
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    const res = await loginUser(email, password);
    localStorage.setItem("token", res.token);
    setUser(res.user);
    return res.user;
  };

  const logout = async () => {
    await logoutUser();
    localStorage.removeItem("token");
    setUser(null);
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};