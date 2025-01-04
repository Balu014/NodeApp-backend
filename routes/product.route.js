const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

const { signup } = require("../controllers/auth.controller.js")

router.post('/signup', signup)

router.get("/api/products", getProducts);

router.get("/api/products:id", getProduct);

router.post("/api/products", createProduct);

router.put("/api/products:id", updateProduct);

router.delete("/api/products:id", deleteProduct);

module.exports = router;
