// routes/WomenShoesRoutes.js
const express = require("express");
const router = express.Router();
const WomenShoesController = require("../Controllers/WomenShoes");

router.get("/", WomenShoesController.getProducts);

module.exports = router;
