
// App.js
import React, { useContext, useReducer, useState } from 'react'
import './App.css';

import ProductCard from './components/ProductCard';
import HomePage from './pages/HomePage';

import CartState from './context/cart/CartState';
import TestContext from './context/TestContext';
import CartContext2 from './context/CartContext2';



const App = () => {  

  const [test, setTest] = useState('hi2 test')

  
  //🍀🍀🍀 cartcontext2
    
  // 
  const SHOW_HIDE_CART = "SHOW_HIDE_CART";
  const ADD_TO_CART = "ADD_TO_CART";
  const REMOVE_ITEM = "REMOVE_ITEM";

    // 🍀reducer
    const CartReducer2 = (state, action) => {

        switch (action.type) {    
                case SHOW_HIDE_CART: {
                  return {
                    ...state,
                    showCart2: !state.showCart2, /* 🍀show & hide Btn */
                  };
                }
      
          /* 🍀...spread operator 
              + new item add */
          case ADD_TO_CART: {
                  return {
                    ...state,
                    cartItems2: [...state.cartItems2, action.payload],
                  };
                }
      
          /* 🍀remove: 
            .filter
            item._id 빼고 새로 리스트 만듬 */
          case REMOVE_ITEM: {
                  return {
                    ...state,
                    cartItems2: state.cartItems2.filter(
                      (item) => item._id !== action.payload
                      ),
                    };
                  }
          default:
            return state;
        }
      };
    
      // 🍀initialState

      const initialState ={
        showCart2:false,
        cartItems2:[],
        test2:"test2",
      }
      

      const [state, dispatch] = useReducer(CartReducer2, initialState);

      console.log(state.cartItems2)


      
      const addToCart2 = (item) => {    
        dispatch({ type: ADD_TO_CART, payload: item });    
      };
      
      const showHideCart2 = () => {    
        dispatch({ type: SHOW_HIDE_CART });    
      };
      
      const removeItem2 = (id) => {    
        dispatch({ type: REMOVE_ITEM, payload: id });    
      };

      

  return (
    <div>
      <CartContext2.Provider value={{
        showCart2:state.showCart2,  
        cartItems2:state.cartItems2,  
        test2:state.test2,  
        addToCart2,showHideCart2,removeItem2,
      }}>
        <TestContext.Provider value={{test,setTest}}>
          <CartState>

          -------------- App   --------------   
          
          
          <HomePage/>
          
          </CartState>
        </TestContext.Provider>
        </CartContext2.Provider>
    </div>
  )
}



export default App