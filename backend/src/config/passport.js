import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../models/User.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
     callbackURL: "http://localhost:5000/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // ✅ Direct User use garne - User.User hoina
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = await User.findOne({ email: profile.emails[0].value });

          if (user) {
            user.googleId = profile.id;
            user.avatar = profile.photos[0]?.value;
            await user.save();
          } else {
            user = await User.create({
              username: profile.displayName,
              email: profile.emails[0].value,
              googleId: profile.id,
              avatar: profile.photos[0]?.value,
              isVerified: true,
              isOnboarded: false,
            });
          }
        }

        return done(null, user);
      } catch (err) {
        console.error("❌ Passport Error:", err);
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id.toString());
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});