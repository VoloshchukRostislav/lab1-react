import React from "react";

import StarRating from "./StarRating";
import BuyButton from "./BuyButton";

const ProductActions = ({ rating, quantity, setQuantity }) => {
  return (
    <div>

      <StarRating rating={rating} />

      <div>
        <p>Quantity: {quantity}</p>

        <button onClick={() => setQuantity(quantity + 1)}>
          +
        </button>

        <button onClick={() => setQuantity(quantity - 1)}>
          -
        </button>

      </div>

      <BuyButton />

    </div>
  );
};

export default ProductActions;