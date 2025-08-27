import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// Get directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS configuration for both development and production
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? [process.env.FRONTEND_URL] // Add your production URL here
      : [
          "http://localhost:3000", // Create React App
          "http://localhost:5173", // Vite (your current setup)
          "http://127.0.0.1:5173", // Alternative localhost format
        ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/drink-selling-app"
    );
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

connectDB();

// API Routes (must come before static file serving)
app.use("/api/auth", authRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// Serve static files from frontend build in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Handle React routing - return all non-API requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// 404 handler for API routes in development
if (process.env.NODE_ENV !== "production") {
  app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: "Route not found",
      path: req.originalUrl,
    });
  });
}

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API URL: http://localhost:${PORT}/api`);
  console.log(`🔗 Allowing CORS from: ${corsOptions.origin.join(", ")}`);
});
