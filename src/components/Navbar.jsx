import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">LunchExpress</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className="nav-link" to="/products">Productos</Link></li>
          {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>}
        </ul>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">🛒 ({cartItems.length})</Link>
          </li>
          <li className="nav-item">
            {isAuthenticated ? (
              <button className="btn btn-outline-light btn-sm" onClick={logout}>Cerrar sesión</button>
            ) : (
              <Link className="btn btn-outline-light btn-sm" to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
