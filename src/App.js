
// App.js
import React, { useContext } from 'react'
import './App.css';

import CartState from './context/cart/CartState';
import Test from './components/Test_context';



const App = () => {  
  return (
    <div>
      <CartState>
        App      
        <Test/>  
  

      </CartState>
    </div>
  )
}



export default App