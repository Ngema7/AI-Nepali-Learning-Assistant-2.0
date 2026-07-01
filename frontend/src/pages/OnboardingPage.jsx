import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import API from "../services/api";
 
const AGE_OPTIONS = [
  { label: "5-8 years", value: 6 },
  { label: "9-12 years", value: 10 },
  { label: "13-16 years", value: 14 },
  { label: "17-20 years", value: 18 },
  { label: "20+ years", value: 21 },
];
 
const PARENT_OPTIONS = [
  { label: "🙋 आफैं सिक्दैछु (Self)", value: "self" },
  { label: "👨‍👧 आमाबुवाले गराउँदैछन् (Parent)", value: "parent" },
  { label: "👩‍🏫 शिक्षकले पठाउनु भयो (Teacher)", value: "teacher" },
];
 
const OnboardingPage = () => {
  const { user, updateUser, loading: authLoading } = useContext(AuthContext);
  const navigate = useNavigate();
 
  // ✅ Already DB ma xa vane pre-fill garne, natra khali
  const [name, setName] = useState(user?.username || "");
  const [selectedAge, setSelectedAge] = useState(user?.age || null);
  const [selectedParent, setSelectedParent] = useState(user?.parentType || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1); // 3-step wizard
 
  // ✅ User already onboarded xa vane onboarding form nadekhai dashboard pathaune
  useEffect(() => {
    if (!authLoading && user?.isOnboarded) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, authLoading, navigate]);
 
  // ✅ AuthContext le user load garisake pachi (Google redirect pachi async
  // aauna sakxa) form field haru sync garne
  useEffect(() => {
    if (user) {
      setName(prev => prev || user.username || "");
      setSelectedAge(prev => prev || user.age || null);
      setSelectedParent(prev => prev || user.parentType || null);
    }
  }, [user]);
 
  const handleSubmit = async () => {
    if (!name.trim() || !selectedAge || !selectedParent) {
      setError("कृपया सबै जानकारी भर्नुस।");
      return;
    }
 
    setLoading(true);
    setError("");
 
    try {
      const res = await API.post("/auth/onboarding", {
        username: name,
        age: selectedAge,
        parentType: selectedParent,
      });
 
      updateUser(res.data.user);
      navigate("/dashboard");
    } catch (err) {
      setError("केही गल्ती भयो। फेरि प्रयास गर्नुस।");
    } finally {
      setLoading(false);
    }
  };
 
  // ✅ Auth check hudai xa waa already onboarded (redirect huna lageko) bhaye
  // form flash hunubata bachaune
  if (authLoading || user?.isOnboarded) {
    return (
      <div style={{
        display: "flex", justifyContent: "center", alignItems: "center",
        height: "100vh", fontSize: "18px"
      }}>
        Loading...
      </div>
    );
  }
 
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a, #1e3a8a, #3b82f6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      <div style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "40px",
        width: "100%",
        maxWidth: "480px",
        boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
      }}>
        {/* Progress dots */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "30px", justifyContent: "center" }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{
              width: "10px", height: "10px", borderRadius: "50%",
              background: step >= s ? "#2563eb" : "#e5e7eb",
              transition: "background 0.3s",
            }} />
          ))}
        </div>
 
        {/* Step 1: Name */}
        {step === 1 && (
          <div>
            <h2 style={{ textAlign: "center", color: "#111827", marginBottom: "8px" }}>
              नमस्ते! 🙏
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "30px" }}>
              तपाईंको नाम के हो?
            </p>
            <input
              type="text"
              placeholder="तपाईंको नाम लेख्नुस..."
              value={name}
              onChange={e => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "2px solid #e5e7eb",
                fontSize: "16px",
                outline: "none",
                marginBottom: "20px",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "#2563eb"}
              onBlur={e => e.target.style.borderColor = "#e5e7eb"}
            />
            <button
              onClick={() => name.trim() ? setStep(2) : setError("नाम चाहिन्छ!")}
              style={btnStyle("#2563eb")}
            >
              अगाडि जानुस् →
            </button>
          </div>
        )}
 
        {/* Step 2: Age */}
        {step === 2 && (
          <div>
            <h2 style={{ textAlign: "center", color: "#111827", marginBottom: "8px" }}>
              उमेर छनोट गर्नुस् 🎂
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "25px" }}>
              {name} जी, तपाईंको उमेर कति हो?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
              {AGE_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setSelectedAge(opt.value)}
                  style={{
                    padding: "13px",
                    borderRadius: "12px",
                    border: `2px solid ${selectedAge === opt.value ? "#2563eb" : "#e5e7eb"}`,
                    background: selectedAge === opt.value ? "#eff6ff" : "#fff",
                    color: selectedAge === opt.value ? "#2563eb" : "#374151",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "15px",
                    transition: "all 0.2s",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => setStep(1)} style={btnStyle("#6b7280")}>← पछाडि</button>
              <button
                onClick={() => selectedAge ? setStep(3) : setError("उमेर छनोट गर्नुस्!")}
                style={btnStyle("#2563eb")}
              >
                अगाडि →
              </button>
            </div>
          </div>
        )}
 
        {/* Step 3: Who are you */}
        {step === 3 && (
          <div>
            <h2 style={{ textAlign: "center", color: "#111827", marginBottom: "8px" }}>
              को हुनुहुन्छ? 👋
            </h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "25px" }}>
              तपाईं कसरी पढ्दैहुनुहुन्छ?
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
              {PARENT_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setSelectedParent(opt.value)}
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    border: `2px solid ${selectedParent === opt.value ? "#2563eb" : "#e5e7eb"}`,
                    background: selectedParent === opt.value ? "#eff6ff" : "#fff",
                    color: selectedParent === opt.value ? "#2563eb" : "#374151",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "15px",
                    transition: "all 0.2s",
                    textAlign: "left",
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
 
            {error && (
              <div style={{
                background: "#fee2e2", color: "#dc2626",
                padding: "10px", borderRadius: "8px",
                marginBottom: "15px", textAlign: "center", fontSize: "14px"
              }}>
                {error}
              </div>
            )}
 
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => setStep(2)} style={btnStyle("#6b7280")}>← पछाडि</button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={btnStyle(loading ? "#93c5fd" : "#2563eb")}
              >
                {loading ? "Saving..." : "सुरु गरौं! 🚀"}
              </button>
            </div>
          </div>
        )}
 
        {step === 1 && error && (
          <p style={{ color: "#dc2626", textAlign: "center", marginTop: "10px", fontSize: "14px" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
 
const btnStyle = (bg) => ({
  flex: 1,
  padding: "13px",
  border: "none",
  borderRadius: "10px",
  background: bg,
  color: "#fff",
  fontSize: "15px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "opacity 0.2s",
});
 
export default OnboardingPage;
 