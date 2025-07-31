# 🛒 Sabores del Norte - eCommerce React

Proyecto final del curso de React de Talento Tech. Se trata de un eCommerce ficticio dedicado a productos regionales del norte argentino como quesos de cabra, fiambres artesanales, vinos salteños, mates y más.

---

## 🌐 Link al sitio desplegado

https://vercel.com/manuels-projects-c9abe2c7/ecommerce-final-react

---

## 🚀 Funcionalidades principales

- ✅ Catálogo de productos con detalles individuales.
- ✅ Sistema de carrito de compras funcional.
- ✅ Login / Logout (contexto simulado, persistente con localStorage).
- ✅ Rutas protegidas para administración de productos.
- ✅ CRUD completo conectado a MockAPI (crear, editar y eliminar productos).
- ✅ Filtro de productos por nombre, categoría y descripción.
- ✅ Paginación por página.
- ✅ Notificaciones con React Toastify.
- ✅ SEO básico con React Helmet.
- ✅ Diseño responsivo con Bootstrap.

---

## 📁 Estructura del proyecto

```
src/
│
├── assets/                # Imágenes y recursos visuales
├── components/            # Navbar, ProductCard, ProductForm, Pagination
├── context/               # AuthContext y CartContext
├── pages/                 # Home, Login, Products, ProductDetail, Admin
├── routes/                # PrivateRoute
├── services/              # api.js (llamadas a MockAPI)
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🛠️ Tecnologías utilizadas

- React
- React Router DOM
- Bootstrap 5
- React Icons
- React Toastify
- React Helmet
- MockAPI
- Context API

---

## 📝 Instalación y uso local

1. Cloná este repositorio:
```bash
git clone https://github.com/Manuacru13/sabores-del-norte.git
```

2. Instalá las dependencias:
```bash
npm install
```

3. Ejecutá la app:
```bash
npm run dev
```

---

## 📌 Notas adicionales

- El login está simulado: se puede acceder a la vista `/admin` luego de hacer clic en "Iniciar Sesión".
- El CRUD de productos requiere estar logueado.
- Los datos se consumen desde [MockAPI](https://mockapi.io).
- La aplicación está optimizada para dispositivos móviles.

---

## 👤 Autor

**Manuel Cruz**  
Desarrollador Frontend con enfoque Full Stack.  
📧 cruzmmanuel@gmail.com  
🌐 [GitHub](https://github.com/Manuacru13)

---

## 🎯 Objetivo

Desarrollar una tienda digital con experiencia de usuario fluida, buenas prácticas de desarrollo y estructura profesional para entornos reales.
