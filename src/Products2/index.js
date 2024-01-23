import React from "react";

const Products2 = () => {
  const products = [
    {
      name: "OPPO Reno10 5G (Ice Blue, 256 GB)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/u/w/-original-imagtcrvzrqnnxpc.jpeg?q=70",
      price: 32999,
      discount: 15,
      specifications: [
        " 8 GB RAM | 256 GB ROM",
        "16.51 cm (6.5 inch) Full HD+ Display",
        " 8 GB RAM | 256 GB ROM",
        "16.51 cm (6.5 inch) Full HD+ Display",
        " 8 GB RAM | 256 GB ROM",
        "16.51 cm (6.5 inch) Full HD+ Display",
        " 8 GB RAM | 256 GB ROM",
        "16.51 cm (6.5 inch) Full HD+ Display",
        " 8 GB RAM | 256 GB ROM",
        "16.51 cm (6.5 inch) Full HD+ Display",
      ],
    },
    {
      name: "OPPO Reno10 5G (Silvery Grey, 256 GB)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/4/-original-imagtcrumzbqj4xd.jpeg?q=70",
      price: 32999,
      discount: 10,
    },
    {
      name: "Apple iPhone 12 (Blue, 128 GB)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70",
      price: 49999,
      discount: 20,
    },
    {
      name: "Apple iPhone 12 (Blue, 128 GB)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70",
      price: 49999,
      discount: 20,
    },
  ];
  return (
    <div className="flex flex-col gap-2 ">
      {products.map((product) => {
        return (
          <div className="flex border-b justify-between gap-1 p-5">
            <div className="flex gap-5">
              <div>
                <img src={product.image} alt="" />
              </div>
              <div>
                <p className="text-2xl">{product.name}</p>
                {product.specifications?.map((i) => {
                  return <p> • {i}</p>;
                })}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {product.price}{" "}
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt=""
                className=" w-20"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products2;
