import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sabores del Norte - Productos Regionales del Norte Argentino</title>
        <meta
          name="description"
          content="Descubrí lo mejor de la cultura gastronómica y artesanal del norte argentino. Quesos de cabra, fiambres regionales, vinos salteños, y mucho más."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="container mt-5">
        <div className="text-center">
          <h1 className="mb-4">Sabores del Norte</h1>
          <p className="lead">
            Descubrí lo mejor de la cultura gastronómica y artesanal del norte argentino.
            Quesos de cabra, fiambres regionales, vinos salteños, y mucho más.
          </p>
          <img
  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80
"
  alt="Productos regionales"
  className="img-fluid rounded mt-4 shadow"
  style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
/>

        </div>
      </div>
    </>
  );
};

export default Home;

