import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavBar";
import AboutContianer from "../Components/AboutContainer";
import MainContainerCourosel from "../Components/MainContainerCourosel";
import BestSellers from "./BestSellers";
import AboutUs from "../Components/AboutUs";
import Contact from "./Contact";
import FooterContainer from "../Components/FooterContainer";

function Home() {
  return (
    <div className="contianer mt-4">
      <NavigationBar />
      <div className="container mt-4" id="about">
        {/* Main content container */}
        <h1 className="text-center">
          Welcome <span style={{ color: "orange" }}>Comfort Path</span>
        </h1>
        <p className="text-center">
          Explore our wide range of products and enjoy a comfortable shopping
          experience.
        </p>
      </div>
      <MainContainerCourosel />
      <AboutUs />
      <BestSellers />
      <Contact />
      <FooterContainer />
    </div>
  );
}

export default Home;
