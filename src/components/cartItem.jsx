import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from './productContext'; 
import { useDispatch } from "react-redux";
import { changeQuantity } from '../stores/cart'

const CartItem = (props) => {
    const { productId, quantity } = props.data;
    const [detail, setDetail] = useState(null);
    const products = useContext(ProductContext); 
    const dispatch = useDispatch();
    useEffect(() => {
        if (products && productId) { 
            const findDetail = products?.find(product => product.id === productId);
            setDetail(findDetail);
        }
    }, [productId, products]); 
    if (!detail) {
        return <div>Product not found</div>;
    }
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            productId : productId,
            quantity : quantity - 1
        }))
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId : productId,
            quantity : quantity + 1
        }))
    }
  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
        <img src={detail.image} alt={detail.title} className='h-12 w-12 rounded-md'/>
        <h3 className=''>{detail.title}</h3>
        <p>${detail.price * quantity}</p>
        <div className='w-20 flex justify-between'>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600'
            onClick={handleMinusQuantity}>
                -
            </button>
            <span className='px-2'>{quantity}</span>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600'
            onClick={handlePlusQuantity}>
                +
            </button>
        </div>
    </div>
  )
}

export default CartItem