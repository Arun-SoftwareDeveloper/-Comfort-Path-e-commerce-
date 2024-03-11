const nodemailer = require("nodemailer");

const calculateBill = (selectedProduct) => {
  const taxRate = 0.1; // 10%

  const subtotal = selectedProduct.price || 0;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2),
  };
};

const sendBillByEmail = (recipientEmail, billData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arunramasamy46@gmail.com",
      pass: "pruxtxnekznczdpc",
    },
  });

  const mailOptions = {
    from: "arunramsamy46@gmail.com",
    to: recipientEmail,
    subject: "Invoice",
    text: `Thank you for your purchase! Here is your invoice:\n\nSubtotal: ₹${billData.subtotal}\nTax: ₹${billData.tax}\nTotal: ₹${billData.total}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = {
  calculateBill,
  sendBillByEmail,
};
