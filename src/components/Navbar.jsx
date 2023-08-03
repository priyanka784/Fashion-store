import React from 'react'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Navbar = () => {

  const cart = useSelector((state) => state.cart);
return (
    <nav className="navbar">
  <div className=" flex flex-wrap items-center justify-between  ">
  <Link to={"/"}>
  <li href="" className="flex items-center">

  
  <img src={logo} className=" h-20 " alt="Flowbite Logo" />
    <span className=" text-4xl font-semibold text-orange-300">Fasion Store</span>
      
  </li>
  </Link>
  
 
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to={'/'}href="#" className="block   text-dark text-3xl  md:p-0 md:dark:text-blue-500" aria-current="page">
            HOME</Link>
      </li>
      <li>
        <a href="#" className="block  mx-8 text-dark text-3xl  md:p-0 md:dark:text-blue-500" aria-current="page">
            JEWLELRY</a>
      </li>
      <li>
        <a href="#" className="block mx-4   text-dark text-3xl  md:p-0 md:dark:text-blue-500" aria-current="page">
            ELECTRONIC</a>
      </li>
      
      <li>
        <a href="#" className="block  mx-4 text-dark text-3xl  md:p-0 md:dark:text-blue-500" aria-current="page">
            SPORTS</a>
      </li>
      <Link to={"/cart"}>
          {" "}
          <li>
            {" "}
            <button className="cart font-serif bg-yellow-300 p-2 rounded-xl w-24 mx-12">CART [{cart.length} ]</button>{" "}
          </li>
        </Link>
      </ul>
   

 
  </div>
</div>
</nav>


  )
}
