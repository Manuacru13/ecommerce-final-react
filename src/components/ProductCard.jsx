import React from "react";
import { FaCartPlus, FaEdit, FaTrash } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart, onEdit, onDelete, isAdmin }) => {
  return (
    <div className="card h-100 shadow-sm" role="region" aria-label={`Producto ${product.name}`}>
      <img
        src={product.image || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={product.name}
        style={{ objectFit: "cover", height: "180px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>
        <p className="card-text fw-bold">
          ${product.price.toFixed(2)} <small className="text-muted">/ unidad</small>
        </p>
        <div className="d-flex justify-content-between align-items-center gap-1 flex-wrap">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onAddToCart(product)}
            aria-label={`Añadir ${product.name} al carrito`}
          >
            <FaCartPlus className="me-1" /> Añadir al carrito
          </button>
          {isAdmin && (
            <div className="d-flex gap-1">
              <button
                className="btn btn-warning btn-sm"
                onClick={() => onEdit(product)}
                aria-label={`Editar ${product.name}`}
              >
                <FaEdit className="me-1" /> Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(product.id)}
                aria-label={`Eliminar ${product.name}`}
              >
                <FaTrash className="me-1" /> Eliminar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

