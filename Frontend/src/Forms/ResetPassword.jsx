// ResetPassword.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backendApi from "../BackendServerApi";
import { Link } from "react-router-dom";

const ResetPassword = ({ resetToken, onSwitchAuthStep }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Validation
    let valid = true;
    const newErrors = { password: "", confirmPassword: "" };

    if (!password.trim()) {
      valid = false;
      newErrors.password = "Password is required";
    }

    if (password !== confirmPassword) {
      valid = false;
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (!valid) {
      return;
    }

    try {
      // Make API request to reset password
      const response = await axios.post(`${backendApi}/resetPassword`, {
        token: resetToken, // Include the reset token
        password,
      });

      // Handle success, e.g., display success message
      toast.success("Password reset successful", { position: "top-right" });
    } catch (error) {
      // Handle error, e.g., display error message
      toast.error("Error resetting password. Please try again.", {
        position: "top-right",
      });
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form">
        <label>
          Reset Token:
          <input
            type="text"
            value={resetToken}
            readOnly // Make the input read-only since you'll be passing the token as a prop
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`form-control ${errors.password && "is-invalid"}`}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`form-control ${errors.confirmPassword && "is-invalid"}`}
          />
          {errors.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          )}
        </label>
        <button type="submit" onClick={handleResetPassword}>
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

export default ResetPassword;
