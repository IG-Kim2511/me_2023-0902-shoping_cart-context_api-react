
/*     
  <🦄🦄 사용 스킬 정리>
  <🍄me_2023-0902-shoping_cart-context_api-react>
     🦄context방법1 : 기본.. index.js에 context 전부 정리
      👉index.js

     //./context/CartState.js 
     🦄context방법2 : 따로 다른 파일에 옮겨넣음 (현재 쓰고있는 방법)  
      👉index.js
      
     🥒{children}

      🍚.reduce함수 :배열의 모든 요소를 순회하면서 각 요소에 대한 누적된 값을 계산하는 데 사용됩니다.
      const totalPrice = state.cartItems.reduce((total, item) => total + item.qty * item.price, 0);

      🚀I need declair stat first to use it on reducer. but I need declair reducer to make state as well. how I fixe it?
      👉declair initiate state on top. 

      //Cart.js
      🍀each item price                   
      <p>{item.qty} x ${item.price} = ${parseFloat(item.qty * item.price).toFixed(2)}</p>

     // Nav.js
      🍀MUI Badge
     🍀Array.length
      🍀
        {showCart ? null :(<div></div>)}

        {cartItems.length === 0 ? (
          null
        ) : (
          <ul></ul>
        )}
*/

// App.js
import React, { useContext, useReducer, useState } from 'react'
import './App.css';

import ProductCard from './components/ProductCard';
import HomePage from './pages/HomePage';

import CartContext from './context/CartContext';
import Nav from './components/Nav';
import Cart from './components/Cart';
import CartState from './context/CartState';




const App = () => {  

  
 

  return (
    <div>   

        <Nav/>
        <Cart/>
        <HomePage/>          
        
    </div>
  )
}



export default App