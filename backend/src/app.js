import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
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

// ✅ Session - passport session ko lagi chahinxa
app.use(session({
  secret: process.env.JWT_SECRET || "fallback_secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.json({ success: true, message: "AI Nepali Learning Assistant API 🚀" });
});

app.use("/api/auth", authRoutes);

export default app;