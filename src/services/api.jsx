// Archivo: src/services/api.js

const BASE_URL = "https://688af6b62a52cabb9f4f84eb.mockapi.io/products";


const api = {
  getProducts: async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Error al obtener productos");
    return res.json();
  },

  getProductById: async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Error al obtener producto");
    return res.json();
  },

  createProduct: async (productData) => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (!res.ok) throw new Error("Error al crear producto");
    return res.json();
  },

  updateProduct: async (id, productData) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (!res.ok) throw new Error("Error al actualizar producto");
    return res.json();
  },

  deleteProduct: async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar producto");
    return res.json();
  },
};

export default api;
