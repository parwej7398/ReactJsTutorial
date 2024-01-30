import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id, name } = useParams();
  const { state } = useLocation();

  console.log({ id });
  console.log({ name });
  console.log({ state });

  const data = "Parvez";

  const str = `Hello "Pankaj" 'Amir' ${data}`;

  return (
    <div className="flex flex-col items-center w-[50vw]">
      <div className="flex gap-3 w-full">
        <div className="w-1/2">
          <img src={state} alt="" />
        </div>
        <div className="w-1/2">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
