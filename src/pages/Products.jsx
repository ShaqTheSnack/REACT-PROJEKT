import React, { useEffect, useState } from "react";
import ProductCard from "../components/Card/Card";
import GridContainer from "../components/GridContainer/GridContainer";

function Products() {
  const [productss, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Der skete en fejl", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <p>Henter produkter...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h2>Products</h2>
      <GridContainer>
        {productss?.products?.map((p) => (
          <ProductCard
            key={p.id}
            title={p.title}
            image={p.images && p.images.length > 0 ? p.images[0] : ""}
            price={`$${p.price}`}
            description={p.description}
            buttonText="Se detaljer"
            linkTo={`/products/${p.id}`}
          />
        ))}
      </GridContainer>
    </section>
  );
}

export default Products;
