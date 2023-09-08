
// CartState.js
import React, { createContext, useReducer } from 'react'
import CartContext from './CartContext';


 const SHOW_HIDE_CART = "SHOW_HIDE_CART";
 const ADD_TO_CART = "ADD_TO_CART";
 const REMOVE_ITEM = "REMOVE_ITEM";


const CartState = ({children}) => {
    
    // 🍀reducer
    const CartReducer = (state, action) => {

        // switch (action.type) {    
        //         case SHOW_HIDE_CART: {
        //           return {
        //             ...state,
        //             showCart: !state.showCart, /* 🍀show & hide Btn */
        //           };
        //         }
      
        //   /* 🍀...spread operator 
        //       + new item add */
        //   case ADD_TO_CART: {
        //           return {
        //             ...state,
        //             cartItems: [...state.cartItems, action.payload],
        //           };
        //         }
      
        //   /* 🍀remove: 
        //     .filter
        //     item._id 빼고 새로 리스트 만듬 */
        //   case REMOVE_ITEM: {
        //           return {
        //             ...state,
        //             cartItems: state.cartItems.filter(
        //               (item) => item._id !== action.payload
        //               ),
        //             };
        //           }
        //   default:
        //     return state;
        // }
      };
    
    
    // 🍀initialState

    const initialState ={
        showCart:false,
        cartItems:['cartitme1'],
        test:"test",
    }
    const [state, dispatch] = useReducer(CartReducer, initialState);

    // const addToCart = (item) => {    
    //   dispatch({ type: ADD_TO_CART, payload: item });    
    // };
    
    // const showHideCart = () => {    
    //   dispatch({ type: SHOW_HIDE_CART });    
    // };
    
    // const removeItem = (id) => {    
    //   dispatch({ type: REMOVE_ITEM, payload: id });    
    // };

  return (
    <div>
        <CartContext.Provider
            value={{
                showCart: state.showCart,
                cartItems: state.cartItems,
                test: state.test,
            }}
        >
        
            {children}
        </CartContext.Provider>
    </div>
  )
}
export default CartState;