import React from "react";

const ProductCard = (product) => {
  const actual_price = product.price - (product.price * product.discount) / 100;
  return (
    <div className="flex flex-col bg-white rounded p-5 shadow">
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <p className="line-through">₹{product.price}</p>
      <span className="flex items-center gap-2 ">
        <p>₹{actual_price}</p> <p>{product.discount}%</p>
      </span>
    </div>
  );
};

export default ProductCard;
