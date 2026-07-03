import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await login(email, password);
      if (!user.isOnboarded) {
        navigate("/onboarding");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ /api/auth/google - correct URL
  const handleGoogleLogin = () => {
   window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg,#0f172a,#1e3a8a,#3b82f6)",
      padding: "20px",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "430px",
        background: "#fff",
        borderRadius: "18px",
        padding: "35px",
        boxShadow: "0 20px 40px rgba(0,0,0,.2)",
      }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: "5px", color: "#111827" }}>
            Welcome Back 👋
          </h1>
          <p style={{ color: "#6b7280", marginBottom: "30px" }}>
            Login to AI Nepali Learning Assistant
          </p>
        </div>

        {error && (
          <div style={{
            background: "#fee2e2",
            color: "#dc2626",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "15px",
            textAlign: "center",
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                outline: "none",
                fontSize: "15px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                outline: "none",
                fontSize: "15px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              background: loading ? "#93c5fd" : "#2563eb",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div style={{ display: "flex", alignItems: "center", margin: "25px 0" }}>
          <hr style={{ flex: 1 }} />
          <span style={{ margin: "0 10px", color: "#9ca3af" }}>OR</span>
          <hr style={{ flex: 1 }} />
        </div>

        <button
          onClick={handleGoogleLogin}
          style={{
            width: "100%",
            padding: "13px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            background: "#fff",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            width="22"
          />
          Continue with Google
        </button>

        <p style={{
          marginTop: "25px",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "14px",
          lineHeight: "22px",
        }}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;