// Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../FormsStyles/Login.css"; // Import your custom styles if needed
import backendApi from "../BackendServerApi";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      valid = false;
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      valid = false;
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (!valid) {
      return;
    }

    try {
      // Make API request to login
      const response = await axios.post(`${backendApi}/login`, {
        email,
        password,
      });

      if (response.status === 401) {
        toast.error("Incorrect password");
      }
      // Handle success, store token in localStorage
      const { token } = response.data;
      onLogin(token);

      // Display success toast
      toast.success("Login successful", { position: "top-right" });
    } catch (error) {
      // Handle error, e.g., display error message
      toast.error("Error logging in. Please try again.", {
        position: "top-right",
      });
      console.error("Error logging in:", error);
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
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className={`form-control ${errors.password && "is-invalid"}`}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        <p>
          Create New Account?<Link to="/register">Register</Link>
        </p>
        <Link to="/forgotPassword">
          {" "}
          <p>Forgot Password?</p>
        </Link>

        {/* Toast Container */}
        <ToastContainer />
      </form>
    </div>
  );
};

export default Login;
