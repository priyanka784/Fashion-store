import React from 'react'
import { useDispatch } from 'react-redux';
import { remove } from '../features/card/cardslice';

const Carditem = ({cartItem}) => {

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };


  return (
    <div className="cartimem flex mx-8 mt-16 ">
       <div>         
         <img src={cartItem.image} className='h-40 w-40' alt="" />
       </div>

<div className='border-solid'>
<h5 className='mx-8 mt-4 text-2xl font-bold'>Title :{cartItem.title} </h5>
<h5 className='mx-8 mt-4 text-2xl font-bold'>Price : {cartItem.price}$</h5>
<h5 className='mx-8 mt-4 text-2xl font-bold'>Qty : 1</h5>
<button className='remove mx-8 mt-4 text-2xl font-bold bg-yellow-400 p-3 w-40 rounded-xl'
     onClick={() => handleRemove(cartItem.id)}>Remove</button>
</div>

    </div>
  )
}

export default Carditem