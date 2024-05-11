import React from "react";
import ReactDOM from "react-dom/client";
import '../../index.css'; // Make sure this path is correct
import Navbar from "../components/Navbar"; // Check this path
import Footer from "../components/Footer"; // Check this path
import ProductGrid from "./ProductGrid"; // Check this path

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a cool product.",
    price: "29.99",
    image: "https://via.placeholder.com/150",
    date: "2024-05-01",
    sold: 150,
    remaining: 50,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is another cool product.",
    price: "39.99",
    image: "https://via.placeholder.com/150",
    date: "2024-05-01",
    sold: 120,
    remaining: 80,
    category: "Electronics"
  },
  // Add more products as needed
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <ProductGrid products={products} />
    <Footer />
  </React.StrictMode>
);
