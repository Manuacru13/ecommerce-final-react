import React from "react";

const ProductCard = ({ product, onAddToCart, onEdit, onDelete, isAdmin }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={product.name}
        style={{ objectFit: "cover", height: "180px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>
        <p className="card-text fw-bold">${product.price.toFixed(2)}</p>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onAddToCart(product)}
          >
            Añadir al carrito
          </button>
          {isAdmin && (
            <>
              <button
                className="btn btn-warning btn-sm"
                onClick={() => onEdit(product)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(product.id)}
              >
                Eliminar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
