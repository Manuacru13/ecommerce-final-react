import React, { useContext } from "react";
import Products from "./Products";
import { useAuth } from "../context/AuthContext";

const Admin = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="container mt-5">
        <h2>Acceso Denegado</h2>
        <p>Debes iniciar sesión para acceder a esta sección.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>Panel de Administración</h1>
      <p>Gestiona tus productos aquí.</p>
      <Products />
    </div>
  );
};

export default Admin;
