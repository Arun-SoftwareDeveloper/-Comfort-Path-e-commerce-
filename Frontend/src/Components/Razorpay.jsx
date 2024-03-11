import React, { useEffect, useState } from "react";

const Razorpay = ({ selectedProduct, navigate }) => {
  const [Razorpay, setRazorpay] = useState(null);

  useEffect(() => {
    // Load Razorpay SDK
    const loadRazorpay = async () => {
      try {
        const Razorpay = await import("razorpay");
        setRazorpay(Razorpay.default);
      } catch (error) {
        console.error("Error loading Razorpay SDK:", error);
      }
    };
    loadRazorpay();
  }, []);

  const handleCheckout = () => {
    // Check if Razorpay SDK is loaded
    if (Razorpay) {
      const rzp = new Razorpay({
        key: "5hdtWWvBa8jc8v1RiMm8tHtJ", // Replace with your Razorpay API key
        amount: selectedProduct.price * 100,
        currency: "INR",
        name: "Your Company Name",
        description: "Purchase Description",
        image: "https://your-company-logo-url.com/logo.png",
        handler: function (response) {
          console.log("Payment successful:", response);
          navigate("/");
        },
      });
      rzp.open();
    } else {
      // Razorpay SDK not loaded, handle the error here
      console.error("Razorpay SDK not loaded");
      alert(
        "Sorry, there was an issue processing your payment. Please try again later."
      );
      // Optionally, you can log the error message or perform other actions as needed
    }
  };

  return (
    <button className="btn btn-success ml-2" onClick={handleCheckout}>
      Checkout
    </button>
  );
};

export default Razorpay;
