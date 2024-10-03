"use client";
import React, { useState } from "react";
import './ProductGrid.css'; 

const ProductGrid = () => {
  const products = [
    { id: 1, name: "CRYSTAL AGATE PHONE GRIP", price: "18.99$", imageUrl: "stone.png" },
    { id: 2, name: "CRYSTAL AGATE PHONE GRIP", price: "18.99$", imageUrl: "stone.png" },
    { id: 3, name: "AMETHYST PHONE GRIP", price: "19.99$", imageUrl: "stone.png" },
    { id: 4, name: "ROSE QUARTZ PHONE GRIP", price: "20.99$", imageUrl: "stone.png" },
    { id: 5, name: "TIGER'S EYE PHONE GRIP", price: "21.99$", imageUrl: "stone.png" },
    { id: 6, name: "LAPIS LAZULI PHONE GRIP", price: "22.99$", imageUrl: "stone.png" },
    { id: 7, name: "ONYX PHONE GRIP", price: "23.99$", imageUrl: "stone.png" },
    { id: 8, name: "JADE PHONE GRIP", price: "24.99$", imageUrl: "stone.png" },
  ];
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product.id);
  };

  return (
    <div className="product-grid-container">
      <h1 className="all-products-title">All Products</h1>
      <div className="filter-sort-container">
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
            <img src={product.imageUrl} alt={product.name} className="stone-jewelry" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="buy-now-button">BUY NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
