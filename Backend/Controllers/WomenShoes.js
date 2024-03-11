// controllers/WomenShoesController.js
const WomenShoes = require("../Models/WomenShoes");

exports.getProducts = async (req, res) => {
  try {
    const products = await WomenShoes.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.insertProducts = async (req, res) => {
  try {
    // Delete existing products in the database
    await WomenShoes.deleteMany();

    // Insert new products into the database
    await WomenShoes.insertMany(req.body.products);

    res.json({ success: true, message: "Products inserted successfully" });
  } catch (error) {
    console.error("Error inserting products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
