import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../features/card/cardslice';

const ProductCard = ({product}) => {

const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
   <>
   <div className=" card bg-white  w-96 h-100  mt-12 flex justify-center p-4 mx-4 flex-col border-solid border-2 border-current rounded-xl">
  <img src={product.image} className='h-44 w-44 mx-16' alt="" />
  <span>
        <h2 className='text-2xl mt-4 mx-4 font-bold'>{product.title}</h2>
        <h3 className='text-2xl mt-4 mx-4 font-bold'>Rate : ${product.price}</h3>
        <h3 className='text-2xl mt-4 mx-4 font-bold'>Qty : 1</h3>
      <button className="remov font-bold bg-yellow-300 w-32 p-2 mt-4 mx-4 w-40 rounded-xl "
      onClick={() => handleAdd(product)} >
        Add Card
      </button>
      </span>
</div>
   </>
  )
}

export default ProductCard