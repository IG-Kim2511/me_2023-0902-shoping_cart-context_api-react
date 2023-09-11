
// App.js
import React, { useContext, useReducer, useState } from 'react'
import './App.css';

import ProductCard from './components/ProductCard';
import HomePage from './pages/HomePage';

import CartState from './context/cart/CartState';
import TestContext from './context/TestContext';
import CartContext2 from './context/CartContext2';


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
                    showCart: !state.showCart, /* 🍀show & hide Btn */
                  };
                }
      
          /* 🍀...spread operator 
              + new item add */
          case ADD_TO_CART: {
                  return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                  };
                }
      
          /* 🍀remove: 
            .filter
            item._id 빼고 새로 리스트 만듬 */
          case REMOVE_ITEM: {
                  return {
                    ...state,
                    cartItems: state.cartItems.filter(
                      (item) => item._id !== action.payload
                      ),
                    };
                  }
          default:
            return state;
        }
      };
    

  const CartState2 = ({children}) => {    

      // 🍀initialState

      const initialState ={
        showCart:false,
        cartItems:[],
        // test:"test",
      }

      const [state, dispatch] = useReducer(CartReducer2, initialState);


      
      const addToCart = (item) => {    
        dispatch({ type: ADD_TO_CART, payload: item });    
      };
      
      const showHideCart = () => {    
        dispatch({ type: SHOW_HIDE_CART });    
      };
      
      const removeItem = (id) => {    
        dispatch({ type: REMOVE_ITEM, payload: id });    
      };
    }


      

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