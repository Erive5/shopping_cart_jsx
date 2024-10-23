import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ data }) => {
  const { id, title, category, price, image } = data;

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col justify-between h-full">
      <h2 className="text-md text-gray-700 text-center py-2 capitalize">
        {category}
      </h2>
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl h-80 object-scale-down"
        />
      </Link>
      <h1 className="text-1xl py-3 text-center font-bold">{title}</h1>
      <div
        className="flex justify-between items-end mt-auto"
        style={{ height: "60px" }}
      >
        <span className="text-2xl font-medium">${price}</span>
        <button className="bg-gray-300 p-2 rounded-md text-md hover:bg-gray-400">
          <i className="fa-solid fa-cart-plus fa-lg mr-1"></i> 
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
