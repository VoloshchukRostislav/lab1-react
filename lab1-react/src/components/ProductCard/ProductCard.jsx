import React, { useState } from "react";

import ProductDetails from "./ProductDetails";
import ProductActions from "./ProductActions";

const ProductCard = () => {

  const [quantity, setQuantity] = useState(1);

  const product = {
    title: "Gaming Mouse",
    description: "High precision gaming mouse",
    price: 59,
    rating: 4
  };

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      width: "300px"
    }}>

      <ProductDetails
        title={product.title}
        description={product.description}
        price={product.price}
      />

      <ProductActions
        rating={product.rating}
        quantity={quantity}
        setQuantity={setQuantity}
      />

    </div>
  );
};

export default ProductCard;