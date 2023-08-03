import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { fetchProducts } from '../features/card/Product/productslice';
import { useDispatch, useSelector } from 'react-redux';



const ProductContainer = () => {
const dispatch = useDispatch()
const {products , isLoading, isError, isSuccess} = useSelector((state)=>state.product)
   useEffect(() => {
      dispatch(fetchProducts())
    }, []);


    if (isError) {
      return (
        <div className="containert">
          <h3 className="all-products-title">Something Went Wrong</h3>
        </div>
      );
    }
  
    if (isLoading) {
      return (
        <div className="containert">
          <h3 className="all-products-title">Loading...</h3>
        </div>
      );
    }
  return (
   <>
<div className=''>
<h2 className='text-6xl font-bold text-center  bg-slate-200' my-4>Our <span className='text-yellow-400'>Product</span></h2>
<div className="product-container w-full bg-slate-200">
<div className="product bg-slate-100  rounded-xl grid grid-flow-row auto-rows-max  flex flex-wrap	w-full">
   {
      products.map(product=> (<ProductCard key={product.id} product={product}/>
      ))}
   
  
   </div>
</div>
   </div>
   </>
  )
}
 export default ProductContainer