"use client"
import React, { useState } from "react";
import './ProductGrid.css'; 

const ProductGrid = () => {
  const products = [
    { id: 1, name: "CRYSTAL AGATE PHONE GRIP", price: "18.99$", imageUrl: "path_to_image" },
    { id: 2, name: "CRYSTAL AGATE PHONE GRIP", price: "18.99$", imageUrl: "path_to_image" },
    
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product.id);
  };

  return (
    <div className="product-grid-container">
      <div className="filter-sort">
        <div className="filter">
          <span>Filter:</span>
          <select>
            <option>All Products</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
        </div>
        <div className="sort">
          <span>Sort:</span>
          <select>
            <option>Best Selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-card ${selectedProduct === product.id ? "selected" : ""}`}
            onClick={() => handleProductClick(product)}
          >
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="buy-now-button">BUY NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
