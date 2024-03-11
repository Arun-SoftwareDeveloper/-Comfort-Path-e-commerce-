// routes/billRoutes.js

const express = require("express");
const router = express.Router();
const {
  calculateBill,
  sendBillByEmail,
} = require("../Controllers/BillController");

router.post("/generateBill", (req, res) => {
  const { selectedProduct, recipientEmail } = req.body;

  const billData = calculateBill(selectedProduct);

  // Send the bill data to the client
  res.json({ billData });

  // Send the bill to the recipient's email
  sendBillByEmail(recipientEmail, billData);
});

module.exports = router;
