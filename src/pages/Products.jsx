import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import GridContainer from "../components/GridContainer/GridContainer";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Henter produkter...</p>;

  return (
    <section>
      <h2>Products</h2>
      <GridContainer>
        {products.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            image={p.images && p.images.length > 0 ? p.images[0] : ""}
            price={`$${p.price}`}
            description={p.description}
            buttonText="Køb"
            onButtonClick={() => alert(`Du valgte ${p.title}`)}
          />
        ))}
      </GridContainer>
    </section>
  );
}

export default Products;
