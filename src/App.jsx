import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import PrivateRoute from "./routes/PrivateRoute";

import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas públicas */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Rutas protegidas */}
        <Route
          path="/admin"
          element={<PrivateRoute>
            <Admin />
          </PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
