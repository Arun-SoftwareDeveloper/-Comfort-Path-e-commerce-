import React from "react";
import "../Styles/AboutUs.css";
const AboutUs = () => {
  return (
    <div className="container mt-4">
      <h1 className="Categories-title text-center" style={{ color: "orange" }}>
        About us
      </h1>

      <div className="row" id="about">
        <div className="col-md-3 about mx-auto">
          <i className="fa-solid fa-arrow-right"></i>
          <h5 className="card-title aboutTitle" style={{ color: "orange" }}>
            Free Shipping
          </h5>
          <p>
            Enjoy free shipping on all orders! We deliver your products right to
            your doorstep without any additional cost.
          </p>
        </div>

        <div className="col-md-3 about mx-auto">
          <i className="fa-solid fa-arrow-right"></i>
          <h5 className="card-title" style={{ color: "orange" }}>
            Secure Payment
          </h5>
          <p>
            Shop with confidence! Our secure payment methods ensure that your
            financial information is protected throughout the transaction
            process.
          </p>
        </div>

        <div className="col-md-3 about mx-auto">
          <i className="fa-solid fa-arrow-right"></i>
          <h5 className="card-title" style={{ color: "orange" }}>
            Serve for you
          </h5>
          <p>
            Our dedicated team is here to serve you. We prioritize customer
            satisfaction and strive to provide the best shopping experience for
            you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
