const express = require("express");
import morgan from "morgan";
import authRouter from "./routes/authRoutes.js";
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "AI Nepali Learning Assistant API Running"
  });
});

app.use("/api/auth", authRouter);
module.exports = app;