import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Modal, Button } from "react-bootstrap";
import SearchBar from "../Components/SearchBar";
import FooterContainer from "../Components/FooterContainer";
import CategoriesBar from "./CategoriesBar";
import kidsProducts from "../Products/KidsProducts";
import AboutContainer from "./AboutContainer";
import backendApi from "../BackendServerApi";

const KidsShoes = ({ handleAddToCart }) => {
  const [products, setProducts] = useState(kidsProducts);
  const [sortOption, setSortOption] = useState("relevance");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const navigate = useNavigate();

  const handleShowFilterModal = () => setShowFilterModal(true);
  const handleCloseFilterModal = () => setShowFilterModal(false);

  const handleShowBuyNowModal = () => setShowBuyNowModal(true);
  const handleCloseBuyNowModal = () => setShowBuyNowModal(false);

  const sortProducts = (option) => {
    let sortedProducts = [...products];
    switch (option) {
      case "relevance":
        break;
      case "highest":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "lowest":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    return sortedProducts;
  };

  const generateProductCards = () => {
    const sortedProducts = sortProducts(sortOption);
    return sortedProducts.map((product, index) => (
      <div key={index} className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div
            id={`productCarousel${index}`}
            className="carousel slide"
            data-ride="carousel"
            data-interval="3000"
          >
            <div className="carousel-inner">
              {product.images.map((image, i) => (
                <div
                  key={i}
                  className={`carousel-item${i === 0 ? " active" : ""}`}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Image ${i + 1}`}
                  />
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href={`#productCarousel${index}`}
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
              href={`#productCarousel${index}`}
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
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text price">Price: ₹{product.price}</p>
            <p className="card-text">{product.description}</p>
            <button
              className="btn btn-success ml-2"
              onClick={() => handleBuyNow(product)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const handleSortChange = (option) => setSortOption(option);

  const filterProducts = (searchQuery) => {
    const filteredProducts = kidsProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleFilterByPrice = () => {
    let filteredProducts = [...kidsProducts];

    if (minPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= parseInt(minPrice, 10)
      );
    }

    if (maxPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseInt(maxPrice, 10)
      );
    }

    setProducts(filteredProducts);
    handleCloseFilterModal();
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setRecipientEmail("");
    handleShowBuyNowModal();
  };

  const handleBuyNowSubmit = async () => {
    try {
      // Create order API call
      const orderResponse = await fetch(`${backendApi}/payment/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipientEmail,
        }),
      });

      // Assuming order creation is successful, navigate to bill
      navigate(`/bill`, {
        state: {
          selectedProduct,
        },
      });

      handleCloseBuyNowModal();
      toast.success("Order Placed Successfully");
    } catch (error) {
      console.error("Error creating order: ", error);
      toast.error("Failed to Place Order");
    }
  };

  return (
    <div className="container mt-4">
      <AboutContainer />

      <CategoriesBar />

      <SearchBar onSearch={filterProducts} />

      <div className="btn-group mt-2">
        <button
          type="button"
          className={`btn btn-secondary ${
            sortOption === "relevance" ? "active" : ""
          }`}
          onClick={() => handleSortChange("relevance")}
        >
          Relevance
        </button>
        <button
          type="button"
          className={`btn btn-secondary ${
            sortOption === "highest" ? "active" : ""
          }`}
          onClick={() => handleSortChange("highest")}
        >
          Price (Highest First)
        </button>
        <button
          type="button"
          className={`btn btn-secondary ${
            sortOption === "lowest" ? "active" : ""
          }`}
          onClick={() => handleSortChange("lowest")}
        >
          Price (Lowest First)
        </button>
      </div>

      <div className="mt-2">
        <Button
          className="btn btn-primary ml-2"
          onClick={handleShowFilterModal}
        >
          Filter by Price
        </Button>
        <Modal show={showFilterModal} onHide={handleCloseFilterModal}>
          <Modal.Header closeButton>
            <Modal.Title>Filter by Price Range</Modal.Title>
            <Button variant="secondary" onClick={handleCloseFilterModal}>
              Close
            </Button>
          </Modal.Header>
          <Modal.Body>
            <p>Enter the price range:</p>
            <div>
              <label>Min Price:</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div>
              <label>Max Price:</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleFilterByPrice}>
              Apply Filter
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <Modal show={showBuyNowModal} onHide={handleCloseBuyNowModal}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Recipient's Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="recipientEmail">Recipient's Email:</label>
            <input
              type="email"
              className="form-control"
              id="recipientEmail"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseBuyNowModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBuyNowSubmit}>
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="row" id="productList">
        {generateProductCards()}
      </div>

      <FooterContainer />
    </div>
  );
};

export default KidsShoes;
