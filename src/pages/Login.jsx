import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      toast.success("Login exitoso");
      navigate("/");
    } else {
      toast.error("Usuario o contraseña incorrectos");
    }
  };

  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
