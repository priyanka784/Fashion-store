import React from 'react'
import logos from "../assets/logo.png"
export const Footer = () => {
  return (
    <div className="containere flex  justify-center bg-slate-200  ">
   
  <div className="cart1  ">
    <div className="1 w-72">
    <img className='fam my-8 h-60 w-20' src={logos} alt="" />
    <h2 className='add my-6 mx-5'><b>Address: </b> 143 White tower, Vijay Nagar  Indore</h2>
    <h2 className='tele my-6 mx-5'><b>Telephone: </b> +91 9669110662</h2>
    <h2 className='email mx-5'><b>Email: </b> santoshparle18@gmail.com</h2>

    </div>
  </div>

  <div className="cart2 my-9 mx-3">
  <div className="2 w-48">
 <h2 className='menu '>MENU</h2>

 <ul className="list-none my-8">
   <li> <a href=""></a>Account</li>
   <li> <a href="">Checkout </a> </li>
   <li> <a href="">Login</a> </li>
   <li> <a href="">Register</a> </li>
   <li> <a href="">Shopping</a></li>
   <li> <a href=""> Widget</a></li>
</ul>
  </div>
  </div>


  <div className="cart2 my-9 mx-3">
  <div className="2 w-48">
 <h2 className='menu '>ACCOUNT</h2>

 <ul className="list-none my-8 ">
   <li> <a href="">Home</a> </li>
   <li> <a href=""></a> About </li>
   <li> <a href=""></a> Service</li>
   <li> <a href=""></a> Testimponial</li>
   <li> <a href=""></a> Blog</li>
   <li> <a href=""></a> Contact</li>
</ul>
  </div>
  </div>

 < div className="cart2 my-9 mx-3 ">
  <div className="2 w-64">
 <h2 className='menu '>NEWSLETTER</h2>
 
 <h2 className='news'>Subscribe by our newsletter and get update protidin.</h2>
  
 <label className="block my-2">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com"   />
  
</label>

  </div>
  </div>


    </div>

  )
}
