import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return <p>Henter produkt...</p>;
  if (!product) return <p>Produkt ikke fundet.</p>;

  const firstImage = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : "";

  return (
    <section>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 12 }}>Tilbage</button>
      <h2>{product.title}</h2>
      <p style={{ fontWeight: 700 }}>${product.price}</p>
      <p>{product.description}</p>
      {firstImage && (
        <img src={firstImage} alt={product.title} style={{ width: 320, height: 320, objectFit: "cover", borderRadius: 8, marginTop: 12 }} />
      )}
    </section>
  );
}

export default SingleProduct;
