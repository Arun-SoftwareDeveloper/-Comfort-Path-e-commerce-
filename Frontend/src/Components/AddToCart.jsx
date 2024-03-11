import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import FooterContainer from "./FooterContainer";
import "../Styles/AddToCart.css";
import backendApi from "../BackendServerApi"; // Import your backend API

function AddToCart({
  cart,
  setCart,
  calculateTotalPrice,
  setRecipientEmail,
  handleAddToCart,
}) {
  const [showModal, setShowModal] = useState(false);
  const [recipientEmail, setRecipientEmailLocal] = useState(""); // Local state for the email input

  useEffect(() => {
    // Load cart data from localStorage on component mount
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    // Save cart data to localStorage whenever cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleOpenModal = () => {
    if (cart.length > 0) {
      setShowModal(true);
    } else {
      alert("Your cart is empty.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!recipientEmail) {
      alert("Please enter the recipient's email.");
      return;
    }

    try {
      const response = await fetch(`${backendApi}/payment/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipientEmail,
          cart,
        }),
      });

      if (response.ok) {
        const orderData = await response.json();
        console.log("Order created:", orderData);

        // Update cart state and localStorage after successful checkout
        setCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
        setRecipientEmail("");

        // You can redirect to the payment gateway or handle success as needed
        console.log("Checkout successful!");
      } else {
        console.error("Failed to create order");
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }

    handleCloseModal();
  };

  return (
    <div className="cart-container mt-4">
      <h2>Add to Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <p>
                {item.name} - ₹{item.price}
              </p>
            </div>
          ))}
          <p className="total-price">Total Price: ₹{calculateTotalPrice()}</p>
          <Button variant="primary" onClick={handleOpenModal}>
            Checkout
          </Button>
        </div>
      )}
      {/* Recipient Email Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Recipient's Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="recipientEmail">Recipient's Email:</label>
              <input
                type="email"
                className="form-control"
                id="recipientEmail"
                value={recipientEmail}
                onChange={(e) => setRecipientEmailLocal(e.target.value)}
              />
            </div>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Checkout
            </Button>
          </form>
        </Modal.Body>
      </Modal>
      {/* Footer Container */}
      <FooterContainer />
    </div>
  );
}

export default AddToCart;
