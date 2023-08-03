import React from 'react'
import Carditem from '../components/Carditem'
import { useSelector } from 'react-redux';

const Card = () => {
  const cartItems = useSelector((state) => state.cart);

  const total = cartItems.reduce((p, c) => {
    return p + c.price;
  }, 0);

  
return (
    <div className="cart-container flex justify-between ">
        <div className="cart-items">
        {cartItems.map((cartItem) => (
            <Carditem key={cartItem.id} cartItem={cartItem} />
          ))}
  
             
       
 </div>

        <div className="bill-section p-4 bg-cyan-200 rounded-xl h-60 my-12 mx-16 ">
          <h4 className='text-2xl mx-8'>
            Total Amount : <br/><br/> $ {total}
            </h4>
          <button className="pay bg-pink-400 w-40  mx-8 rounded-xl p-2 mt-12">Pay Now</button>
        </div>
      </div>
  )
}

export default Card