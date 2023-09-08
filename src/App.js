
// App.js
import React, { useContext } from 'react'
import './App.css';
import CartState from './context/cart/CartState';
import CartContext from './context/cart/CartContext';



const App = () => {  
  return (
    <div>
      <CartState>
        App        
        <Test_Context/>

      </CartState>
    </div>
  )
}



const Test_Context = () => {
  const {test} = useContext(CartContext)
  
  return (
    <div>{test}</div>
  )
}

export default App