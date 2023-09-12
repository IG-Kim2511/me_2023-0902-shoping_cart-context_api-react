
/* 
  <🦄🦄AI 질문 목록 정리>
  <🍄me_2023-0902-react>
     🍀rating code with material ui icon
     
  <🦄🦄 사용 스킬 정리>
  <🍄me_2023-0902-folder>  
    🍄
*/

// App.js
import React, { useContext, useReducer, useState } from 'react'
import './App.css';

import ProductCard from './components/ProductCard';
import HomePage from './pages/HomePage';

import CartContext from './context/CartContext';
import Nav from './components/Nav';
import Cart from './components/Cart';



const App = () => {  

  
  //🍀🍀🍀 CartContext   
  
    // 🍉action type
    const SHOW_HIDE_CART = "SHOW_HIDE_CART";
    const ADD_TO_CART = "ADD_TO_CART";
    const REMOVE_ITEM = "REMOVE_ITEM";

    // 🍀reducer
    const CartReducer = (state, action) => {

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
    
    // 🍀initialState

    const initialState ={
      showCart:false,
      cartItems:[],   /* cart */
      test:"hi test",
    }
    
    const [state, dispatch] = useReducer(CartReducer, initialState);
    console.log(state.cartItems)
    
    // 🍉dispatch
    const addToCart = (item) => {    
      dispatch({ type: ADD_TO_CART, payload: item });    
    };
    
    const showHideCart = () => {    
      dispatch({ type: SHOW_HIDE_CART });    
    };
    
    const removeItem = (id) => {    
      dispatch({ type: REMOVE_ITEM, payload: id });    
    };      

  return (
    <div>   
      <CartContext.Provider value={{
        showCart:state.showCart,  
        cartItems:state.cartItems,  
        test:state.test,  
        addToCart,showHideCart,removeItem,
      }}>       
          <Nav/>
          <Cart/>
          <HomePage/>  

        </CartContext.Provider>
    </div>
  )
}



export default App