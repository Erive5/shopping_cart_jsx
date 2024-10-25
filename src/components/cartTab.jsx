import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './cartItem';
import { toggleStatusTab } from '../stores/cart';

const CartTab = () => {
  const carts = useSelector(store => store.cart.products);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  }

  return (
    <div className={`fixed top-0 right-0 bg-slate-700 shadow-2xl w-96 h-full grid grid-rows[30px_1fr_30px]
    transform transition-transform duration-500
    ${ statusTab === false ? "translate-x-full" : ""}
    `}>
      <h2 className=' text-white text-2xl p-4 text-center'>Shopping Cart</h2>
      <div className='p-2 overflow-y-auto'>
        {carts.map((product, key)=> 
          <CartItem key={key} data={product}/>
        )}
      </div>
      <div className='grid grid-cols-2 gap-1 p-2'>
        <button className='bg-black text-white text-sm rounded-md p-4' onClick={handleCloseTabCart}>CLOSE</button>
        <button className='bg-amber-600 text-white text-sm rounded-md p-4'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartTab