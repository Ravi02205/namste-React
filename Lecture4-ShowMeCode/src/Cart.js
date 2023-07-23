import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/store';
import CartItemCard from './CartItemCard';
import { clearItem } from '../utils/cartSlice';

const Cart = () => {

    const items = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClick=()=>{
        dispatch(clearItem());
    }
    return (
        <div>
            <h1 className='font-bold text-center text-4xl'>Cart Page</h1>
            <button className='bg-red-400 rounded-md text-white p-2 m-2 justify-end' onClick={handleClick}>Clear Cart</button>
            <div className='flex flex-wrap'> 
                {
                    items.map((item) => <CartItemCard {...item} />)
                }
            </div>
        </div>
    )
}

export default Cart;
