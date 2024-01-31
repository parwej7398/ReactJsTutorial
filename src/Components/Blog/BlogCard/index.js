import React from "react";

function BlogCard() {

  const categories = [
    {
      category_name: 'Apple mobiles',
      products: [
        { product_name: "Apple Iphone 11", image: 'https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg', discount: '-15%', actual_price: 76000, price: 86000 },
        { product_name: 'Apple iPhone 13', image: 'https://m.media-amazon.com/images/I/315oQlfQ6WL._SY445_SX342_QL70_FMwebp_.jpg', discount: '-10%', actual_price: 59000, price: 68000 },
        { product_name: 'Apple iPhone 14 Plus', image: 'https://m.media-amazon.com/images/I/31laW9Ex46L._SY445_SX342_QL70_FMwebp_.jpg', discount: '-20%', actual_price: 82000, price: 96990 },
        { product_name: 'Apple iPhone 14 Pro Max', image: 'https://m.media-amazon.com/images/I/31DaY6l18YL._SY445_SX342_QL70_FMwebp_.jpg', discount: '-10%', actual_price: 124500, price: 150000 }
      ],
      tag: "See all deals"
    },
    {
      category_name: "Samsung Mobiles",
      products: [
        { product_name: "Samsung Galaxy M04", image: 'https://m.media-amazon.com/images/I/41rxSxVXs7L._SX300_SY300_QL70_FMwebp_.jpg', discount: '-30%', actual_price: 8345, price: 15000 },
        { product_name: "Samsung Galaxy M52 5G", image: 'https://m.media-amazon.com/images/I/41+EgceMbjL._SY300_SX300_.jpg', discount: '-15%', actual_price: 15999, price: 12000, },
        { product_name: "Samsung S20", image: 'https://m.media-amazon.com/images/I/71wGLBDEsvL._SL1500_.jpg', discount: '-18%', actual_price: 35000, price: 42000, },
        { product_name: "Samsung s22 ultra", image: 'https://m.media-amazon.com/images/I/71PzXKXjz6L._SL1500_.jpg', discount: '-12%', actual_price: 90000, price: 99999, }
      ],
      tag: "See More.."
    },
    {
      category_name: "Airdrope",
      products: [
        { product_name: "Boat Airdrope 141", image: 'https://m.media-amazon.com/images/I/61ars+VGPVL._SL1500_.jpg', price: 700, discount: '-10%', actual_price: 345 },
        { product_name: "Apple AirPods Pro", image: 'https://m.media-amazon.com/images/I/2110TEYPKnL._SX300_SY300_QL70_FMwebp_.jpg', price: 25000, discount: '-10%', actual_price: 22990 },
        { product_name: "Bolte Airdrope 141", image: 'https://m.media-amazon.com/images/I/61ars+VGPVL._SL1500_.jpg', price: 1499, discount: '-10%', actual_price: 999 },
        { product_name: "Airdrope 131", image: 'https://m.media-amazon.com/images/I/41ovPadr44L._SX300_SY300_QL70_FMwebp_.jpg', price: 2200, discount: '-10%', actual_price: 1599 }
      ]
    },
    {
      category_name: "Mouse",
      products: [
        { product_name: "Mouse", image: 'https://m.media-amazon.com/images/I/41I-azRJBLL._SX300_SY300_QL70_FMwebp_.jpg', price: 1200, discount: '-40%', actual_price: 769 },
        { product_name: "Mouse", image: 'https://m.media-amazon.com/images/I/21ADkFnbFbL._SX300_SY300_QL70_FMwebp_.jpg', price: 2000, discount: '-50%', actual_price: 999 },
        { product_name: " Mouse", image: 'https://m.media-amazon.com/images/I/41Gx0Wihv8L._SX300_SY300_QL70_FMwebp_.jpg', price: 799, discount: '-20%', actual_price: 599 },
        { product_name: "Zebronic Mouse", image: 'https://m.media-amazon.com/images/I/41WjOsTLVFL._SX300_SY300_QL70_FMwebp_.jpg', price: 1099, discount: '-60%', actual_price: 440 }
      ]
    },
    {
      category_name: 'Adapter',
      products: [
        { product_name: "rts Universal Travel Adapter", image: 'https://m.media-amazon.com/images/I/41uGjvXbeBL._SX300_SY300_QL70_FMwebp_.jpg', price: 99999, discount: '-10%', actual_price: 90000 },

      ]
    },
    {
      category_name: "USB",
      products: [
        { product_name: "Mini USB ", image: 'https://m.media-amazon.com/images/I/3172BJyynBS._SY300_SX300_QL70_FMwebp_.jpg', price: 99999, discount: '-10%', actual_price: 90000 },
      ]
    },
    {
      category_name: "Data cable",
      products: [
        { product_name: "80W OnePlus Dash Warp Charge", image: 'https://m.media-amazon.com/images/I/41QYIjGdnRL._SX300_SY300_QL70_FMwebp_.jpg', price: 9999, discount: '-10%', actual_price: 999 },
      ]
    },
    {
      category_name: "charger",
      products: [
        { product_name: "Oraimo Wall Charger", image: 'https://m.media-amazon.com/images/I/31uw1n6IyKL._SX300_SY300_QL70_FMwebp_.jpg', price: 99999, discount: '10%', actual_price: 870 },
      ]
    },
  ]
  return (
    <div>
      <div className='flex flex-col p-1'>
        <div className='grid grid-cols-3 gap-2 '>  {categories.map((category) => {

          return (
            <div className='p-2 flex flex-col gap-2 border'>
              <p>{category.category_name}</p>
              <hr />
              <div className='grid grid-cols-2 gap-2 text-black'>
                {category.products.map((product) => {
                  const discount_value = parseInt(product.discount.replace('-', '').replace('%', ''))
                  const actual_price = product.price - (product.price * discount_value) / 100
                  return <div className='flex flex-col gap-2 p-3 bg-white'>
                    <p>{product.product_name}</p>
                    <img src={product.image} alt="" className='h-28' />

                    <div className='flex'>
                      <s>₹{product.price}</s>
                      <p className='text-red-400'>{product.discount}</p>

                    </div>
                    <p>₹{actual_price}</p>

                  </div>
                })}
              </div>
              <span>{category.tag}</span>

            </div>

          )
        })}

        </div>

      </div>
    </div>

  );
}

export default BlogCard;





