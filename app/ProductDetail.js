import React from 'react';
import './ProductDetail.css';

const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      
      <div className="product-header">
        <button className="view-all-btn">View All</button>
      </div>

      <div className="product-details">
        <div className="left-side">
          <h2 className="best-price">BEST PRICE</h2>
          <h1 className="product-title">Agate Phone Grip</h1>
          <div className="price-section">
            <span className="old-price">44.50$</span>
            <span className="new-price">19.50$</span>
          </div>
          <p className="product-description">
            These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
          </p>
          <button className="buy-now-btn">BUY NOW</button>
        </div>

        <div className="right-side">
          <div className="product-image-container">
            <img src="stone.png" className="product-image" />
          </div>
        </div>
      </div>

      <div className="wave-background"></div>
    </div>
  );
};

export default ProductDetail;
