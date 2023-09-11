
// App.js
import React, { useContext, useState } from 'react'
import './App.css';

import ProductCard from './components/ProductCard';
import HomePage from './pages/HomePage';

import CartState from './context/cart/CartState';
import TestContext from './context/TestContext';
import CartContext2 from './context/CartContext2';




const App = () => {  

  const [test, setTest] = useState('hi2 test')

  return (
    <div>
      <TestContext.Provider value={{test,setTest}}>
        <CartState>

        -------------- App   --------------   
        
        <HomePage/>
        
        </CartState>
      </TestContext.Provider>
    </div>
  )
}



export default App