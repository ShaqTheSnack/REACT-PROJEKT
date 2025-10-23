import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, price, description, images = [] }) => {
  return (
    <article className="product-card">
      <div className="product-images">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={title} loading="lazy" />
        ))}
      </div>
      <div className="product-body">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
      </div>
    </article>
  );
};

export default ProductCard;
