// models/WomenShoes.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }],
});

const womenShoesSchema = new mongoose.Schema({
  products: [productSchema],
});

const WomenShoes = mongoose.model("WomenShoes", womenShoesSchema);

module.exports = WomenShoes;
