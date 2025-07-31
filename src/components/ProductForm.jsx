import React, { useState, useEffect } from "react";

const ProductForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [name, setName] = useState(initialData.name || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [image, setImage] = useState(initialData.image || "");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setName(initialData.name || "");
    setPrice(initialData.price || "");
    setDescription(initialData.description || "");
    setImage(initialData.image || "");
  }, [initialData]);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "El nombre es obligatorio";
    if (!price || Number(price) <= 0) errs.price = "El precio debe ser mayor a 0";
    if (!description.trim() || description.trim().length < 10)
      errs.description = "La descripción debe tener al menos 10 caracteres";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onSubmit({
        name,
        price: Number(price),
        description,
        image,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          type="number"
          className={`form-control ${errors.price ? "is-invalid" : ""}`}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price && <div className="invalid-feedback">{errors.price}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          className={`form-control ${errors.description ? "is-invalid" : ""}`}
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && (
          <div className="invalid-feedback">{errors.description}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">URL de imagen</label>
        <input
          type="text"
          className="form-control"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary me-2">
        Guardar
      </button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
};

export default ProductForm;
