const express = require("express");
const router = express.Router();

// Sample product data
let products = [
    { id: "1", name: "Laptop", description: "High-performance laptop with 16GB RAM", price: 1200, category: "electronics", inStock: true },
    { id: "2", name: "Smartphone", description: "Latest model with 128GB storage", price: 800, category: "electronics", inStock: true },
    { id: "3", name: "Coffee Maker", description: "Programmable coffee maker with timer", price: 50, category: "kitchen", inStock: false },
];

// ✅ GET all products
router.get("/", (req, res) => {
    res.json(products);
});

// ✅ POST a new product
router.post("/", (req, res) => {
    const newProduct = {
        id: (products.length + 1).toString(),
        name: req.body.name,
        description: req.body.description || "No description provided",
        price: req.body.price,
        category: req.body.category,
        inStock: true,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

module.exports = router;
