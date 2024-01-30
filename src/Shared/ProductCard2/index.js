import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard2 = ({ product }) => {
  const { id, image, name, price, discount, specifications } = product;

  const actual_price = price - (price * discount) / 100;

  const navigate = useNavigate();

  // const str = "Hello 'Pankaj' ";
  // const str = `Hello "Pankaj" 'Amir' `;

  const data = "Parvez";

  const str = `Hello "Pankaj" 'Amir' ${data}`;

  return (
    <div
      className="flex flex-col bg-white rounded p-5 shadow cursor-pointer"
      // onClick={() => navigate(`/product/${id}/${name.replaceAll(" ", "-")}`)}
      onClick={() => navigate(`/product/${id}/${name}`, { state: image })}
    >
      <img src={image} alt="" />
      <p>{name}</p>
      <s>{price}</s>
      {/* <p className="line-through">₹{product.price}</p> */}
      <span className="flex items-center gap-2 ">
        <p>₹{actual_price}</p> <p>{discount}%</p>
      </span>
      {specifications?.map((specs) => {
        return <p key={specs}>{specs}</p>;
      })}
    </div>
  );
};

export default ProductCard2;
