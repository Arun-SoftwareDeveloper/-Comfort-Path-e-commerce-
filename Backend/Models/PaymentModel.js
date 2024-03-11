const mongoose = require("mongoose");

// Define the schema for the Payment model
const paymentSchema = new mongoose.Schema({
  recipientEmail: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create the Payment model based on the schema
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
