
// App.js
import React, { useContext } from 'react'
import './App.css';

import CartState from './context/cart/CartState';
import Test from './components/Test_context';
import ProductCard from './components/ProductCard';
import HomePage from './pages/HomePage';



const App = () => {  
  return (
    <div>
      <CartState>
        App      
        
        <HomePage/>
        
        <Test/>  
      </CartState>
    </div>
  )
}



export default App