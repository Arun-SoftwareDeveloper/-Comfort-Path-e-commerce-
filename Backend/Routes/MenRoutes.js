const express = require("express");
const router = express.Router();
const menShoesController = require("../Controllers/MenShoes");
const authenticateToken = require("../authController"); // Import the authentication middleware

// Create a new product (requires authentication)
router.post("/men", authenticateToken, menShoesController.createProduct);

// Get all products (requires authentication)
router.get("/men", authenticateToken, menShoesController.getAllProducts);

// Get a specific product by ID (requires authentication)
router.get(
  "/men/:productId",
  authenticateToken,
  menShoesController.getProductById
);

// Update a product by ID (requires authentication)
router.put(
  "/men/:productId",
  authenticateToken,
  menShoesController.updateProductById
);

// Delete a product by ID (requires authentication)
router.delete(
  "/men/:productId",
  authenticateToken,
  menShoesController.deleteProductById
);

module.exports = router;
