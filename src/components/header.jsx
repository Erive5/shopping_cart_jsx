import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';



const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.products)
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach(product => total += product.quantity)
    setTotalQuantity(total)
  },[carts])
  const handleOpenTabCart = () =>{
    dispatch(toggleStatusTab());
  }

  return (
    <header className='bg-slate-500 flex justify-between items-center mb-5 p-10 rounded-md'>
      <Link to='/' className='text-3xl font-bold text-slate-100'>Home</Link>
      <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative'
      onClick={handleOpenTabCart}>
        <i className="fa-solid fa-cart-shopping fa-lg"></i>
        <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{ totalQuantity }</span>
      </div>
    </header>
  )
}

export default Header