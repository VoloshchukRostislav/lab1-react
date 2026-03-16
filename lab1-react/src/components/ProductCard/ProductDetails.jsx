import React from "react";

const ProductDetails = ({ title, description, price }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>${price}</h3>
    </div>
  );
};

export default ProductDetails;