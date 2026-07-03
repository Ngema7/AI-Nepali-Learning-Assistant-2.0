import express from "express";
import passport from "passport";
import {
  loginUser,
  registerUser,
  getMe,
  logoutUser,
  completeOnboarding,
  googleCallback,
} from "../controllers/authController.js";
import protect from "../middleware/auth.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/me", protect, getMe);
router.post("/logout", protect, logoutUser);
router.post("/onboarding", protect, completeOnboarding);

// ==============================
// GOOGLE LOGIN START
// ==============================
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false, // ✅ FIX
  })
);

// ==============================
// GOOGLE CALLBACK
// ==============================
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login?error=google_failed",
    session: false, // ✅ FIX
  }),
  googleCallback
);

export default router;