import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import auth from "../middleware/auth.js";
import {
  validateSignup,
  validateLogin,
  handleValidationErrors,
} from "../middleware/validation.js";

const router = express.Router();

// Register user
router.post(
  "/register",
  validateSignup,
  handleValidationErrors,
  async (req, res, next) => {
    try {
      const { name, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User with this email already exists",
        });
      }

      // Create new user
      const user = new User({ name, email, password });
      await user.save();

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.status(201).json({
        success: true,
        message: "User registered successfully",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

// Login user
router.post(
  "/login",
  validateLogin,
  handleValidationErrors,
  async (req, res, next) => {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Check password
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Update last login
      user.lastLogin = new Date();
      await user.save();

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          lastLogin: user.lastLogin,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

// Validate token and get user info
router.get("/validate-token", auth, async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        lastLogin: user.lastLogin,
      },
    });
  } catch (error) {
    next(error);
  }
});

// Logout (optional - mainly for clearing server-side sessions if needed)
router.post("/logout", auth, async (req, res) => {
  // In JWT-based auth, logout is handled client-side
  // But you can add token blacklisting here if needed
  res.json({
    success: true,
    message: "Logged out successfully",
  });
});

export default router;
