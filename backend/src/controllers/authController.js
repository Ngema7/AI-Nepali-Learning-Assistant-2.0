import bcrypt from "bcryptjs";
import { User } from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// @desc    POST /api/auth/login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email registered chaina." });
    }

    if (!user.password) {
      return res.status(401).json({ 
        message: "Yo account Google bata register vayeko xa. Google login use garnus." 
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password milena." });
    }

    const token = generateToken(user._id);
    user.isLoggedIn = true;
    user.token = token;
    await user.save();

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // production ma true
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      success: true,
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        isOnboarded: user.isOnboarded,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// @desc    POST /api/auth/register
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered xa." });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashed });

    const token = generateToken(user._id);
    user.token = token;
    await user.save();

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      success: true,
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        isOnboarded: user.isOnboarded,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// @desc    GET /api/auth/me
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password -token -otp");
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    POST /api/auth/logout
export const logoutUser = async (req, res) => {
  try {
    if (req.user) {
      await User.findByIdAndUpdate(req.user.id, { isLoggedIn: false, token: null });
    }
    res.clearCookie("token");
    res.json({ success: true, message: "Logged out" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    POST /api/auth/onboarding
export const completeOnboarding = async (req, res) => {
  try {
    const { username, age, parentType } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { username, age, parentType, isOnboarded: true },
      { new: true }
    ).select("-password -token");

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    GET /api/auth/google/callback
// ✅ FIXED GOOGLE CALLBACK
export const googleCallback = async (req, res) => {
  try {
    const user = req.user;
    
    // यदि कुनै कारणवश गुगलले युजर डाटा ब्याकइन्डमा पठाएन भने
    if (!user) {
      return res.redirect(`${process.env.FRONTEND_URL || "http://localhost:5173"}/login?error=google_failed`);
    }

    // १. टोकन जेनेरेट गर्ने
    const token = generateToken(user._id);

    // २. युजरको स्टाटस अपडेट गरेर सेभ गर्ने
    user.isLoggedIn = true;
    user.token = token;
    await user.save();

    // ३. ब्राउजरमा कुकी सेट गर्ने
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // production मा true
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

    // ४. अनबोर्डिङ स्थिति अनुसार सही पेजमा टोकन सहित रिडाइरेक्ट गर्ने
    if (!user.isOnboarded) {
      return res.redirect(`${frontendUrl}/onboarding?token=${token}`);
    } else {
      return res.redirect(`${frontendUrl}/dashboard?token=${token}`);
    }
    
  } catch (err) {
    console.error("Google Callback Controller Error:", err);
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    return res.redirect(`${frontendUrl}/login?error=server_error`);
  }
};