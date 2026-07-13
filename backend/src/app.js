import dotenv from "dotenv";
// १. सबैभन्दा पहिले एनभायर्नमेन्ट भेरिएबल लोड गर्ने
dotenv.config(); 

import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import passport from "passport";

// २. त्यसपछि मात्र पासपोर्ट कन्फिगरेसन र राउट्स ल्याउने
import "./config/passport.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

// ३. पासपोर्ट इनिसियलाइज गर्ने
app.use(passport.initialize());

app.get("/", (req, res) => {
  res.json({ success: true, message: "AI Nepali Learning Assistant API 🚀" });
});

app.use("/api/auth", authRoutes);

export default app;