import React from 'react'
import { Navbar } from './components/Navbar'
import Home from './page/Home'
import Card from './page/Card'
import { BrowserRouter as Router , Routes , Route, BrowserRouter } from "react-router-dom"

const App = () => {
  return (
   <Router>
   <Navbar/>
   <Routes>
   <Route path="/"element={<Home/>}/>
   <Route path="/cart"element={<Card/>}/>

   </Routes>




   </Router>

  )
}

export default App