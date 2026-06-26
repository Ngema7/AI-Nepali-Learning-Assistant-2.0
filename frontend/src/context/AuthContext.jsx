import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // यदि पहिले नै लगइन छ भने LocalStorage बाट डाटा तान्ने
  useEffect(() => {
    const savedUser = localStorage.getItem('nepali_tutor_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // लगइन फङ्सन
  const login = (email, password) => {
    if (email === 'demo@gmail.com' && password === 'password123') {
      const userData = { name: 'रमित श्रेष्ठ', email: email, role: 'student' };
      setUser(userData);
      localStorage.setItem('nepali_tutor_user', JSON.stringify(userData));
      return { success: true };
    } else {
      return { success: false, message: 'कृपया सही इमेल वा पासवर्ड हाल्नुहोस्!' };
    }
  };

  // लगआउट फङ्सन
  const logout = () => {
    setUser(null);
    localStorage.removeItem('nepali_tutor_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};