import React from "react";

const StarRating = ({ rating }) => {

  const stars = "⭐".repeat(rating);

  return <p>{stars}</p>;

};

export default StarRating;