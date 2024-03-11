const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserRoutes = require("./Routes/UserRoutes");
const PaymentRotues = require("./Routes/PaymentRouter");
const protectedRoutes = require("./Routes/MenRoutes");
const BillRoutes = require("./Routes/BillRoutes");
const WomenRoutes = require("./Routes/WomenShoes");
const dbUrl =
  "mongodb+srv://arunramasamy46:arunramasamy46@cluster0.1pscbqf.mongodb.net/?retryWrites=true&w=majority";
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start your server or perform any other operations here
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.use(cors());
app.use(bodyParser.json());
app.use("/", UserRoutes);
app.use("/api", protectedRoutes);
app.use("/womenShoes", WomenRoutes);
app.use("/", BillRoutes);
app.use("/payment", PaymentRotues);
app.get("/", (req, res) => {
  res.send("Hello");
});

const Port = 4000;
app.listen(Port, () => {
  console.log(`The server is running on the ${Port}`);
});
