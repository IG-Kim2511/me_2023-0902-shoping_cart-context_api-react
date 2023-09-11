
// App.js
import React, { useContext, useState } from 'react'
import './App.css';

import CartState from './context/cart/CartState';

import ProductCard from './components/ProductCard';
import HomePage from './pages/HomePage';
import MyApp from './---trash,Test---/Test0910';
import TestContext from './context/TestContext';



const App = () => {  

  const [test, setTest] = useState('hi2 test')
  
  return (

    <div>

    <TestContext.Provider value={{test,setTest}}>
      <CartState>
      <MyApp/>
      -------------- App   --------------   
      
      <HomePage/>
      
      </CartState>
    </TestContext.Provider>
    </div>
  )
}



export default App