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
      secure: false, 
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

// @desc    GET /api/auth/google/callback
export const googleCallback = async (req, res) => {
  try {
    const user = req.user;
    
    if (!user) {
      return res.redirect("http://localhost:5173/login?error=google_failed");
    }

    const token = generateToken(user._id);
    user.isLoggedIn = true;
    user.token = token;
    await user.save();

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // सिधै फ्रन्टइन्डको ड्यासबोर्डमा टोकन पठाउने
    return res.redirect(`http://localhost:5173/dashboard?token=${token}`);
    
  } catch (err) {
    console.error("Google Callback Controller Error:", err);
    return res.redirect("http://localhost:5173/login?error=server_error");
  }
};