import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import colehaanImage from "../Images/colehaan1.jpg";
import converseImage from "../Images/converse3.webp";
import axImage from "../Images/ax2.webp";
import lvImage from "../Images/LV1.webp";
import "../Styles/BestSellers.css";

const BestSellersCard = ({ imagePath, altText, productName, isLoggedIn }) => {
  const handleClick = () => {
    if (isLoggedIn) {
      toast.success(`You clicked on ${productName}`);
    } else {
      toast.error("Please login to view details");
    }
  };

  return (
    <div className="col-md-3" onClick={handleClick}>
      <div className="category-card">
        <img src={imagePath} alt={altText} width="400px" height="300px" />
        <h3>{productName}</h3>
      </div>
    </div>
  );
};

const BestSellers = ({ isLoggedIn }) => (
  <div className="container mt-4">
    <h1
      className="Categories-title"
      id="bestsellers"
      style={{ color: "orange" }}
    >
      OUR BESTSELLERS
    </h1>

    {/* Start of the row for bestsellers */}
    <div className="row">
      <BestSellersCard
        imagePath={colehaanImage}
        altText="Men Shoes"
        productName="COLEHAAN STYLISH BOOTS"
        isLoggedIn={isLoggedIn}
      />

      <BestSellersCard
        imagePath={converseImage}
        altText="Women's Shoes"
        productName="CONVERSE-ALLSTAR"
        isLoggedIn={isLoggedIn}
      />

      <BestSellersCard
        imagePath={axImage}
        altText="Kids Shoes"
        productName="ARMANI EXCHANGE"
        isLoggedIn={isLoggedIn}
      />

      <BestSellersCard
        imagePath={lvImage}
        altText="Kids Shoes"
        productName="LOUIS VUITTON CASUAL"
        isLoggedIn={isLoggedIn}
      />
    </div>
    {/* End of the row for bestsellers */}

    {/* Toast Container for displaying messages */}
    <ToastContainer />
  </div>
);

export default BestSellers;
