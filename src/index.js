import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartState from './context/CartState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>
);

 // 🦄context방법1 : 기본.. app.js에 context 전부 정리

  // //🍀🍀🍀 CartContext   
  
  //   // 🍉action type
  //   const SHOW_HIDE_CART = "SHOW_HIDE_CART";
  //   const ADD_TO_CART = "ADD_TO_CART";
  //   const REMOVE_ITEM = "REMOVE_ITEM";

  //   // 🍀reducer
  //   const CartReducer = (state, action) => {

  //       switch (action.type) {    
  //               case SHOW_HIDE_CART: {
  //                 return {
  //                   ...state,
  //                   showCart: !state.showCart, /* 🍀show & hide Btn */
  //                 };
  //               }
      
  //         /* 🍀...spread operator 
  //             + new item add */
  //         case ADD_TO_CART: {
  //                 return {
  //                   ...state,
  //                   cartItems: [...state.cartItems, action.payload],
  //                 };
  //               }
      
  //         /* 🍀remove: 
  //           .filter
  //           item._id 빼고 새로 리스트 만듬 */
  //         case REMOVE_ITEM: {
  //                 return {
  //                   ...state,
  //                   cartItems: state.cartItems.filter(
  //                     (item) => item._id !== action.payload
  //                     ),
  //                   };
  //                 }
  //         default:
  //           return state;
  //       }
  //   };
    
  //   // 🍀initialState

  //   const initialState ={
  //     showCart:false,
  //     cartItems:[],   /* cart */
  //     test:"hi test",
  //   }
    
  //   const [state, dispatch] = useReducer(CartReducer, initialState);
  //   console.log(state.cartItems)
    
  //   // 🍉dispatch
  //   const addToCart = (item) => {    
  //     dispatch({ type: ADD_TO_CART, payload: item });    
  //   };
    
  //   const showHideCart = () => {    
  //     dispatch({ type: SHOW_HIDE_CART });    
  //   };
    
  //   const removeItem = (id) => {    
  //     dispatch({ type: REMOVE_ITEM, payload: id });    
  //   };      

  //   // 🍀function    
  //   // 🍉totalPrice, 
  //   // 🍚.reduce함수 :배열의 모든 요소를 순회하면서 각 요소에 대한 누적된 값을 계산하는 데 사용됩니다.     
  //   const totalPrice = state.cartItems.reduce((total, item) => total + item.price, 0);

  
/* 
  👉context방법1
      <CartContext.Provider value={{
          showCart:state.showCart,  
          cartItems:state.cartItems,  
          test:state.test,  
          addToCart,showHideCart,removeItem,totalPrice,
        }}>               
          <Nav/>
          <Cart/>
          <HomePage/>  
        </CartContext.Provider> 
  
        
  🦄context방법2 : 따로 다른 파일에 옮겨넣음 (현재 쓰고있는 방법)  
        👉./context/CartState.js 

 */