import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/store" element={<h1>Store</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}
