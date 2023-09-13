/* 
<🦄🦄AI 질문 목록 정리>

 🍀I need declair stat first to use it on reducer. but I need declair reducer to make state as well. how I fixe it?
*/

import React, { useReducer } from 'react';
import CartContext from './CartContext';

// 🍉action type
const SHOW_HIDE_CART = "SHOW_HIDE_CART";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_ITEM = "REMOVE_ITEM";

// 🍀initialState
const initialState = {
  showCart: false,
  cartItems: [], /* cart */
  test: "hi test",
};

// 🍀reducer
/* 

/* 
  🍄0311-0540. ADD_TO_CART

  10. cart안에 item에 클릭한 item이 있는지  find()

  15.  cart안에 아이템 이 없을때,  
  기존의 다른아이템 + 
  payload로 온 item... spread문법 사용... []벗겨냄,  qty:1 추가함

  20. cart안에  item 이 있을때, 
  20-10. cart안 item의 id === payload로 온 item의 id 체크 - map()

  30. 둘이 같다면  cart안에 그 아이템 있음, 
  cart안 item... spread문법 사용... []벗겨냄 , qty에 +1 함

  30-10. 둘이 다르면 cart안에 아이템 없음,  그 아이템 그대로 return  (변화없음)


*/

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
      // check if product is already existing
      const exist = state.cartItems.find((x) => x._id === action.payload._id);

      // incerase qty +1 or return with qty: 1
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === action.payload._id
              ? { ...x, qty: x.qty + 1 }
              : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              ...action.payload,
              qty: 1,
            },
          ],
        };
      }
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

const CartState = ({ children }) => {

  // 🍀state with dispatch, CartReducer, initialState
  const [state, dispatch] = useReducer(CartReducer, initialState);
  console.log(state.cartItems);

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

  // 🍀function
  // 🍉totalPrice,
  // 🍚.reduce함수 :배열의 모든 요소를 순회하면서 각 요소에 대한 누적된 값을 계산하는 데 사용됩니다.
  const totalPrice = state.cartItems.reduce((total, item) => total + item.qty * item.price, 0);



  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        test: state.test,
        addToCart,
        showHideCart,
        removeItem,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
