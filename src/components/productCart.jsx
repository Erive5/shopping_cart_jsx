import React from 'react';
import { Link } from 'react-router-dom';

const ProductCart = ({ data }) => {  // Destructuras la prop 'data'
  const { id, title, category, price, image } = data;

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
        <h1 className="text-lg font-bold">{title}</h1>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className="w-full h-88 object-cover object-top drop-shadow-[0_80px_30px_#0007]" />
      </Link>
        <h2 className="text-md text-gray-700">{category}</h2>
        <h2 className="text-md text-gray-700">${price}</h2>
    </div>
  );
};

export default ProductCart;
