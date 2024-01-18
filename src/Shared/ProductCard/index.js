import React from "react";

const ProductCard = (i) => {
  console.log(i);

  const actual_price = i.price - (i.price * i.discount) / 100;

  return (
    <div className="flex flex-col bg-white rounded p-5 shadow">
      <img src={i.image} alt="" />
      <p>{i.name}</p>
      <s>{i.price}</s>
      {/* <p className="line-through">₹{product.price}</p> */}
      <span className="flex items-center gap-2 ">
        <p>₹{actual_price}</p> <p>{i.discount}%</p>
      </span>
    </div>
  );
};

export default ProductCard;
