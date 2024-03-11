// ForgotPassword.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backendApi from "../BackendServerApi";

const ForgotPassword = ({ onSwitchAuthStep }) => {
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    email: "",
  });

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    // Validation
    let valid = true;
    const newErrors = { email: "" };

    if (!email.trim()) {
      valid = false;
      newErrors.email = "Email is required";
    }

    setErrors(newErrors);

    if (!valid) {
      return;
    }

    try {
      // Make API request to initiate password reset
      const response = await axios.post(`${backendApi}/forgotPassword`, {
        email,
      });

      // Handle success, e.g., display success message
      toast.success("Password reset email sent", { position: "top-right" });
    } catch (error) {
      // Handle error, e.g., display error message
      toast.error("Error initiating password reset. Please try again.", {
        position: "top-right",
      });
      console.error("Error initiating password reset:", error);
    }
  };

  return (
    <div className="container mt-4">
      <form className="auth-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className={`form-control ${errors.email && "is-invalid"}`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleForgotPassword}
        >
          Reset Password
        </button>
        <p>
          Remember your password?{" "}
          <Link to="/login">
            <span onClick={() => onSwitchAuthStep("login")}>Login</span>
          </Link>
        </p>

        {/* Toast Container */}
        <ToastContainer />
      </form>
    </div>
  );
};

export default ForgotPassword;
