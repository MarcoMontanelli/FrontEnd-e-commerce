import React from "react";
import ReactDOM from "react-dom/client";
import '../../index.css'; // Make sure this path is correct
import Navbar from "../components/Navbar"; // Check this path
import Footer from "../components/Footer"; // Check this path
import LoginPage from "./login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <LoginPage />
    <Footer />
  </React.StrictMode>
);
