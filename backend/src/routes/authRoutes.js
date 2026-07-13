import express from "express";
import passport from "passport";
import { loginUser, getMe, logoutUser, googleCallback } from "../controllers/authController.js";
import protect from "../middleware/auth.js";

const router = express.Router();

router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.post("/logout", protect, logoutUser);

// ✅ केवल एउटा मात्र सफा गुगल राउट राख्नुहोस्
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login?error=google_failed",
    session: false, 
  }),
  googleCallback
);

export default router;