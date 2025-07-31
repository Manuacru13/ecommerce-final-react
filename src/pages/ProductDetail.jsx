import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await api.getProductById(id);
        setProduct(data);
      } catch {
        setError("No se pudo cargar el producto.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="container mt-4">Cargando producto...</p>;
  if (error) return <p className="container mt-4 text-danger">{error}</p>;
  if (!product) return <p className="container mt-4">Producto no encontrado.</p>;

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Volver
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image || "https://via.placeholder.com/400"}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>${product.price.toFixed(2)}</h4>
          <button
            className="btn btn-primary"
            onClick={() => {
              addToCart(product);
              toast.success(`${product.name} agregado al carrito`);
            }}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

