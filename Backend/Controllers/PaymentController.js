const Payment = require("../Models/PaymentModel");
const nodemailer = require("nodemailer");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_jj72mf9LXeX8f6",
  key_secret: "UoIEra3TwBxdr6SlRk2ou6iz",
});

const handlePaymentSuccess = async (req, res) => {
  try {
    console.log(req.body);
    const { orderId, amount, paymentId, signature, recipientEmail } = req.body;

    // For Razorpay, you may need to verify signature from webhook, but it's optional

    // Process successful payment and send email confirmation, etc.
    // You can add your business logic here.

    res.json({ success: true });
  } catch (error) {
    console.error("Payment processing error: " + error);
    return res.status(500).json({ error: "Payment processing failed" });
  }
};

const createOrder = async (req, res) => {
  try {
    // Check if recipientEmail exists in req.body
    const recipientEmail = req.body.recipientEmail;
    console.log("Recipient email:", recipientEmail); // Logging recipientEmail for debugging
    if (!recipientEmail) {
      return res.status(400).json({ error: "Recipient email is missing" });
    }

    // Save the recipient's email to the database
    const payment = new Payment({
      recipientEmail,
      timestamp: new Date(),
    });

    await payment.save();

    // Use Razorpay API to create an order
    const options = {
      amount: 1000, // Amount in the smallest currency unit (e.g., paise for INR)
      currency: "INR",
      receipt: "order_rcptid_11",
      payment_capture: 1,
    };
    const order = await razorpay.orders.create(options);

    // Send a confirmation email to the recipient
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "arunramasamy46@gmail.com",
        pass: "pruxtxnekznczdpc",
      },
    });
    const mailOptions = {
      from: "arunramasamy46@gmail.com",
      to: recipientEmail,
      subject: "Order Confirmation from Comfort Path",
      html: `
        <h1>Dear Customer,</h1>
        <p>Thank you for choosing Comfort Path! Your order has been successfully created.</p>
        <p>Your items will be ready to ship</p>
        <p>For any questions or concerns, please contact our customer support.</p>
        <p>Thank you for shopping with Comfort Path!</p>
      `,
    };
    console.log("Mail options:", mailOptions); // Logging mailOptions for debugging

    transporter.sendMail(mailOptions, (emailError, info) => {
      if (emailError) {
        console.log("Email error: " + emailError);
        return res.status(500).json({ error: "Email sending failed" });
      } else {
        console.log("Email sent: " + info.response);
        return res
          .status(200)
          .json({ orderId: order.id, amount: order.amount });
      }
    });
  } catch (error) {
    console.error("Order creation error: " + error);
    return res.status(500).json({ error: "Order creation failed" });
  }
};

module.exports = { handlePaymentSuccess, createOrder };
