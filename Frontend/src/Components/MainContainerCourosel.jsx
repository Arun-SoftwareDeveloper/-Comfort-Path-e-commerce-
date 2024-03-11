import React from "react";
import image1 from "../Images/dashboard1.jpg";
import image2 from "../Images/dashboard2.jpg";
import image3 from "../Images/dashboard3.jpg";

function MainContainerCourosel() {
  return (
    <div className="container mt-4">
      {/* Bootstrap Carousel */}
      <div
        id="imageCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image1}
              className="d-block w-100"
              alt="Image 1"
              style={{ width: 800, height: 450 }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={image2}
              className="d-block w-100"
              alt="Image 2"
              style={{ width: 800, height: 450 }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={image3}
              className="d-block w-100"
              alt="Image 3"
              style={{ width: 800, height: 450 }}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#imageCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#imageCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default MainContainerCourosel;
