import React from "react";
import ProductCard2 from "../Shared/ProductCard2";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "OPPO Reno10 5G (Ice Blue, 256 GB)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/u/w/-original-imagtcrvzrqnnxpc.jpeg?q=70",
      price: 32999,
      discount: 15,
      specifications: [
        " 8 GB RAM | 256 GB ROM",
        "16.51 cm (6.5 inch) Full HD+ Display",
      ],
      tax: "Tax",
    },
    {
      id: 2,
      name: "OPPO Reno10 5G (Silvery Grey, 256 GB)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/4/-original-imagtcrumzbqj4xd.jpeg?q=70",
      price: 32999,
      discount: 10,
    },
    {
      id: 3,
      name: "Apple iPhone 12 (Blue, 128 GB)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70",
      price: 49999,
      discount: 20,
    },
    {
      id: 4,
      name: "Apple iPhone 12 (Blue, 128 GB)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70",
      price: 49999,
      discount: 20,
    },
  ];

  return (
    <div className="bg-gray-200 h-screen flex flex-col gap-2 p-2">
      {/* <div className="grid grid-cols-6 gap-4 p-4">
        {products.map((i) => {
          return (
            <ProductCard
              name={i.name}
              price={i.price}
              discount={i.discount}
              image={i.image}
            />
          );
        })}
      </div> */}
      <div className="grid grid-cols-6 gap-4 p-4">
        {products.map((i, index) => {
          return <ProductCard2 product={i} />;
        })}
      </div>
    </div>
  );
};

export default Products;
