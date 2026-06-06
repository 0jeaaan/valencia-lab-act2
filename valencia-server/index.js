import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://valencia-lab-act2.vercel.app",
  "https://jeanpaula-portfolio.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      const isAllowed =
        allowedOrigins.includes(origin) ||
        /^https:\/\/jeanpaula-portfolio-[a-z0-9-]+\.vercel\.app$/.test(origin) ||
        /^https:\/\/valencia-lab-act2-[a-z0-9-]+\.vercel\.app$/.test(origin);

      if (isAllowed) return callback(null, true);

      return callback(new Error(`Not allowed by CORS: ${origin}`));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Valencia WebProg API is running.",
    routes: ["/api", "/api/users", "/api/users/login", "/api/users/register"],
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Valencia WebProg API is running.",
    routes: ["/api/users", "/api/users/login", "/api/users/register"],
  });
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});