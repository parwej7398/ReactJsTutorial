import React from "react";

const ProductCard2 = ({ product }) => {
  const { image, name, price, discount, specifications } = product;

  const actual_price = price - (price * discount) / 100;

  return (
    <div className="flex flex-col bg-white rounded p-5 shadow">
      <img src={image} alt="" />
      <p>{name}</p>
      <s>{price}</s>
      {/* <p className="line-through">₹{product.price}</p> */}
      <span className="flex items-center gap-2 ">
        <p>₹{actual_price}</p> <p>{discount}%</p>
      </span>
      {specifications?.map((specs) => {
        return <p>{specs}</p>;
      })}
    </div>
  );
};

export default ProductCard2;
