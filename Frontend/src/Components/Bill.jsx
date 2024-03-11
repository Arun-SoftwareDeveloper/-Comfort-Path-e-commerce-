import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Bill.css";
import Razorpay from "../Components/Razorpay"; // Importing Razorpay from separate file
import jsPDF from "jspdf";
import "jspdf-autotable";

const Bill = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedProduct = location.state?.selectedProduct;
  const [billData, setBillData] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (selectedProduct) {
      // Send a request to the server to generate the bill
      fetch("http://localhost:4000/generateBill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedProduct,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setBillData(data.billData);
        })
        .catch((error) => console.error("Error:", error));
    }

    // Hide the bill after 10 seconds and navigate to "/"
    const timerId = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timerId); // Cleanup the timer when the component unmounts or changes
  }, [selectedProduct]);

  const handleDownloadPDF = () => {
    // Create PDF
    const doc = new jsPDF();
    doc.text("Invoice", 20, 10);
    doc.autoTable({
      head: [["ID", "Description", "Amount"]],
      body: [
        [
          selectedProduct?.id,
          selectedProduct?.name,
          `₹${selectedProduct?.price.toFixed(2)}`,
        ],
      ],
      foot: [
        ["Subtotal", "", `₹${billData?.subtotal}`],
        ["Tax", `(10%)`, `₹${billData?.tax}`],
        ["Total", "", `₹${billData?.total}`],
      ],
    });
    doc.save("invoice.pdf");
  };

  if (!selectedProduct || !isVisible) {
    return null; // Don't render the component if no product is selected or if it's not visible
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Invoice</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedProduct.id}</td>
            <td>{selectedProduct.name}</td>
            <td>₹{selectedProduct.price.toFixed(2)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Subtotal</td>
            <td>₹{billData?.subtotal}</td>
          </tr>
          <tr>
            <td colSpan="2">Tax ({(10).toFixed(0)}%)</td>
            <td>₹{billData?.tax}</td>
          </tr>
          <tr>
            <td colSpan="2">Total</td>
            <td>₹{billData?.total}</td>
          </tr>
        </tfoot>
      </table>

      {/* Recipient email input */}

      <div className="mt-4">
        {/* Download PDF button */}
        <button className="btn btn-primary ml-2" onClick={handleDownloadPDF}>
          Download PDF
        </button>
        {/* Checkout button */}
        <Razorpay selectedProduct={selectedProduct} navigate={navigate} />
      </div>
    </div>
  );
};

export default Bill;
