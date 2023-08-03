import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./card/cardslice"
import productReducer from "./card/Product/productslice"
const store =configureStore({
    reducer:{
cart :cartReducer,
product :productReducer
    }
})
export default store