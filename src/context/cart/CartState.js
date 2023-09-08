
// CartState.js
import React, { createContext, useReducer } from 'react'
import CartContext from './CartContext';

const CartState = ({children}) => {
    
    // 🍀reducer
    const CartReducer = (state, action) => {


      };
    
    
    // 🍀initialState

    const initialState ={
        showCart:false,
        cartItems:["cart"],
        test:"test-hello",
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