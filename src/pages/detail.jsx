import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../components/productContext";
import { useDispatch } from 'react-redux'
import { addToCart } from '../stores/cart'

// averiguar como pasar products aqui :O
const Detail = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === parseInt(id));
  if (!product) {
    <p>Product was not found</p>;
  }

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
  }
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1)
  }
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      productId : product.id, 
      quantity : quantity
    })); 
  }

  return (
    <div>
      <h2 className="text-3xl text-center">PRODUCT DETAIL</h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={product.image} alt={product.title} className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{product.title}</h1>
          <p className="text-3xl font-bold">${product.price}</p>
          <div className="flex gap-5 ">
            <div className="flex gap-2 justify-center items-center">
              <button className="bg-gray-100 h-full w-10 font-bold text-xl flex justify-center items-center " onClick= { handleMinusQuantity }>
                -
              </button>
              <span className="bg-slate-300 h-full w-10 font-bold text-xl flex justify-center items-center">
                {quantity}
              </span>
              <button className="bg-gray-100 h-full w-10 font-bold text-xl flex justify-center items-center" onClick= { handlePlusQuantity }>
                +
              </button>
            </div>
            <button className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl"
            onClick={ handleAddToCart }>
              Add To Cart
            </button>
          </div>
          <p className="text-2xl font-semibold capitalize">{product.category}</p>
          <p className="first-letter-capitalized text-2xl">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
