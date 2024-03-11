import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function AboutContainer() {
  const handleLogout = () => {
    // Simulating a logout action
    // In a real application, you would perform actual logout logic here
    toast.success("User Logged Out", {
      position: "top-right",
      style: {
        background: "#28a745", // Background color
        color: "#fff", // Text color
        borderRadius: "8px", // Border radius
        border: "1px solid #218838", // Border color
      },
    });
  };

  return (
    <div className="container mt-4" id="about">
      {/* Logout link with Bootstrap styling */}
      <Link
        to="/"
        className="float-right text-decoration-none text-dark"
        onClick={handleLogout}
      >
        <i className="fas fa-power-off mr-2"></i> Logout
      </Link>

      {/* Main content container */}
      <h1 className="text-center mb-4">
        Welcome{" "}
        <span style={{ color: "orange", fontWeight: "bold" }}>
          Comfort Path
        </span>
      </h1>
      <p className="text-center">
        Explore our wide range of products and enjoy a comfortable shopping
        experience.
      </p>
    </div>
  );
}

export default AboutContainer;
