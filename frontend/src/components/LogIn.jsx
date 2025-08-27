import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const LogIn = ({ isOpen, onClose }) => {
  // ADD: isSignupMode state to track which mode we're in
  const [isSignupMode, setIsSignupMode] = useState(false);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "", // ADD: name field for signup
    confirmPassword: "", // ADD: confirm password for signup
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { loginAction, signupAction } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!credentials.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = "Email is invalid";
    }

    // Password validation
    if (!credentials.password) {
      newErrors.password = "Password is required";
    } else if (credentials.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(credentials.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    // ADD: Signup-specific validation
    if (isSignupMode) {
      if (!credentials.name) {
        newErrors.name = "Name is required";
      } else if (credentials.name.length < 2) {
        newErrors.name = "Name must be at least 2 characters";
      }

      if (!credentials.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (credentials.password !== credentials.confirmPassword) {
        newErrors.confirmPassword = "Passwords don't match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      let result;

      if (isSignupMode) {
        const { name, email, password } = credentials;
        result = await signupAction({ name, email, password });
      } else {
        const { email, password } = credentials;
        result = await loginAction({ email, password });
      }

      if (result.success) {
        onClose();
        navigate("/");
      } else {
        setErrors({
          general:
            result.message || `${isSignupMode ? "Signup" : "Login"} failed`,
        });
      }
    } catch (error) {
      setErrors({ general: "An unexpected error occurred" });
    } finally {
      setIsLoading(false);
    }
  };

  // ADD: Toggle function to switch between login/signup modes
  const toggleMode = () => {
    setIsSignupMode(!isSignupMode);
    // Clear form and errors when switching modes
    setCredentials({
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="bg-opacity-60 fixed inset-0 z-[9999] flex items-center justify-center bg-black p-5 backdrop-blur-sm"
        onClick={handleOverlayClick}
        onKeyDown={handleEscapeKey}
        tabIndex={-1}
      >
        <div
          className="animate-fadeIn relative w-full max-w-md scale-100 transform rounded-lg bg-[#23022E] p-8 shadow-2xl transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl font-bold text-white transition-colors hover:text-[#F8CE35]"
            aria-label="Close modal"
          >
            &times;
          </button>

          {/* UPDATED: Dynamic title based on mode */}
          <h2 className="mb-2 text-center font-[poppins] text-2xl font-bold text-[#F8CE35]">
            {isSignupMode ? "Create your" : "Log in to your"}{" "}
            <span className="font-[Playwrite_HU] text-[#F8CE35]">Account</span>
          </h2>

          {/* UPDATED: Toggle prompt with working click handler */}
          <p className="mb-6 text-center font-[poppins] text-gray-400">
            {isSignupMode
              ? "Already have an account?"
              : "Don't have an account?"}
            <button
              onClick={toggleMode}
              className="ml-1 cursor-pointer text-blue-400 transition-colors hover:text-blue-300"
            >
              {isSignupMode ? "Log in" : "Sign up"}
            </button>
          </p>

          {/* General error message */}
          {errors.general && (
            <div className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-sm text-red-700">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* ADD: Name input - only show in signup mode */}
            {isSignupMode && (
              <div className="mb-4">
                <input
                  className={`w-full rounded border p-3 font-[poppins] font-bold text-gray-900 placeholder-gray-500 ${
                    errors.name
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 bg-white"
                  } ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  value={credentials.name}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
            )}

            {/* Email input */}
            <div className="mb-4">
              <input
                className={`w-full rounded border p-3 font-[poppins] font-bold text-gray-900 placeholder-gray-500 ${
                  errors.email
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300 bg-white"
                } ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
                placeholder="Email"
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Password input */}
            <div className="mb-4">
              <input
                className={`w-full rounded border p-3 font-[poppins] font-bold text-gray-900 placeholder-gray-500 ${
                  errors.password
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300 bg-white"
                } ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
                placeholder="Password"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
              {isSignupMode && !errors.password && (
                <p className="mt-1 text-xs text-gray-500">
                  Password must be at least 6 characters and contain at least
                  one uppercase letter, one lowercase letter, and one number.
                </p>
              )}
            </div>

            {/* ADD: Confirm Password input - only show in signup mode */}
            {isSignupMode && (
              <div className="mb-4">
                <input
                  className={`w-full rounded border p-3 font-[poppins] font-bold text-gray-900 placeholder-gray-500 ${
                    errors.confirmPassword
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300 bg-white"
                  } ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={credentials.confirmPassword}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {/* UPDATED: Dynamic submit button */}
            <button
              className={`flex w-full items-center justify-center rounded p-3 font-[Playwrite_HU] font-bold text-[#23022E] transition-all duration-200 ${
                isLoading
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-[#F8CE35] hover:scale-105 hover:bg-[#E6B82F]"
              }`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-[#23022E] border-t-transparent"></div>
                  {isSignupMode ? "Creating Account..." : "Logging in..."}
                </>
              ) : (
                <>
                  {isSignupMode ? "Sign Up" : "Log In"}
                  <i className="fas fa-arrow-right ml-2"></i>
                </>
              )}
            </button>

            {/* Forgot password link - only show in login mode */}
            {!isSignupMode && (
              <a
                className="mt-4 block cursor-pointer text-center font-[poppins] text-blue-400 transition-colors hover:text-blue-300"
                href="#"
              >
                Forgot password?
              </a>
            )}

            {/* Divider */}
            <div className="my-4 flex items-center">
              <hr className="flex-grow border-gray-600" />
              <span className="mx-4 font-[poppins] text-gray-300">or</span>
              <hr className="flex-grow border-gray-600" />
            </div>

            {/* UPDATED: Dynamic Google button text */}
            <button
              className="flex w-full items-center justify-center rounded border border-gray-600 p-3 font-[poppins] text-white transition-colors duration-200 hover:bg-gray-700"
              type="button"
              onClick={() => {
                console.log("Google sign-in clicked");
              }}
            >
              <img
                alt="Google Logo"
                className="mr-2 h-5 w-5"
                src="https://developers.google.com/identity/images/g-logo.png"
              />
              Sign {isSignupMode ? "Up" : "In"} with Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
