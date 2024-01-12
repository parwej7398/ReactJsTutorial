import React from "react";
import im from "../image/amazon.png";
import imag from "../image/flag.png";
import image from "../image/cart.png";
import logo from "../image/start.png";
const Amazon = () => {
const categries = [
  {
    
  }
]
  return (
    <div>
      <div className="bg-black text-white flex items-center justify-around">
        <div>
          <img src={im} alt="" />
        </div>
        <div>
          <p>Delivering to Lucknow 226016</p>
          <p>Update location</p>
        </div>
        <div>
          <input type="search" placeholder="Amazon Fashiong Search Amazon.in" />
        </div>
        <div className="flex items-center">
          <img src={imag} alt="" />
          <p>EN</p>
          <p>Hello,sign in</p>
          <p>Account & Lists</p>
          <p>Returns</p>
          <p>& orders</p>
          <img src={image} alt="" />
          <p>Cart</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <span>All</span>
          <span>Fresh</span>
          <span>Amazon miniTv</span>
          <span>Sell</span>
          <span>Best Sellers</span>
          <span>Todays Deals</span>
          <span>Mobiles</span>
          <span>Electronics</span>
          <span>Customer Service</span>
          <span>Prime</span>
          <span>New Releases</span>
          <span>Gift Ideas</span>
        </div>
        <div>
          <span>New Launche from Mobiles,Electronics & more|Shop now</span>
        </div>
      </div>




<div className="flex items-center justify-start">
      <div className=" ">
        <p>Amazon_Fashion</p>
      </div>

      <div className="flex justify-end">
        <p>Women</p>
        <p>Men</p>
        <p>Kids</p>
        <p>Bags & Luggage</p>
        <p>SportSwear</p>
        <p>Sales & Deals</p>
      </div>
      </div>

      <div>
        <img src={logo} alt="" />
      </div>






    </div>
  );
};

export default Amazon;
