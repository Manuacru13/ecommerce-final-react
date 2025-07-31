import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaEdit, FaTrash, FaCartPlus } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import ProductForm from "../components/ProductForm";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import api from "../services/api";

const Products = () => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const PRODUCTS_PER_PAGE = 6;

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    if (term === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(
          (p) =>
            p.name.toLowerCase().includes(term) ||
            (p.category && p.category.toLowerCase().includes(term)) ||
            (p.description && p.description.toLowerCase().includes(term))
        )
      );
    }
    setCurrentPage(1);
  }, [searchTerm, products]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getProducts();
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      setError("Error al cargar productos regionales");
      toast.error("No se pudieron cargar los productos");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} agregado al carrito`);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este producto?")) return;
    try {
      await api.deleteProduct(id);
      toast.success("Producto eliminado");
      fetchProducts();
    } catch {
      toast.error("Error al eliminar producto");
    }
  };

  const handleSave = async (productData) => {
    try {
      if (editingProduct) {
        await api.updateProduct(editingProduct.id, productData);
        toast.success("Producto actualizado");
      } else {
        await api.createProduct(productData);
        toast.success("Producto creado");
      }
      setEditingProduct(null);
      fetchProducts();
    } catch {
      toast.error("Error al guardar producto");
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
  };

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <>
      <Helmet>
        <title>Productos Regionales del Norte Argentino</title>
        <meta
          name="description"
          content="Explorá lo mejor de las provincias del norte argentino: quesos, fiambres, vinos, mates y más."
        />
      </Helmet>

      <div className="container mt-4">
        <h2>Productos Regionales del Norte Argentino</h2>
        <p className="text-muted">
          Explorá lo mejor de nuestras provincias: quesos, fiambres, vinos, mates y más.
        </p>

        <input
          type="text"
          aria-label="Buscar productos por nombre, categoría o descripción"
          placeholder="Buscar por nombre, categoría o descripción"
          className="form-control mb-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {loading && <p>Cargando productos...</p>}
        {error && <p className="text-danger">{error}</p>}

        {editingProduct && (
          <div className="mb-4" aria-live="polite">
            <h4>{editingProduct.id ? "Editar Producto" : "Agregar Producto"}</h4>
            <ProductForm
              initialData={editingProduct}
              onSubmit={handleSave}
              onCancel={handleCancel}
            />
          </div>
        )}

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {currentProducts.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
                onEdit={isAuthenticated ? handleEdit : undefined}
                onDelete={isAuthenticated ? handleDelete : undefined}
                isAdmin={isAuthenticated}
                // Podemos mejorar ProductCard para que reciba iconos si querés
              />
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Products;


