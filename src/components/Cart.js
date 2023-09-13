import React, { useContext } from "react";
import "./Cart.css";

import CartContext from "../context/CartContext";
import CartItems from "./CartItems";

import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {
  const { showCart, cartItems, showHideCart, removeItem, totalPrice } =
    useContext(CartContext);

  console.log(showCart);

  return (
    <section>    
      {showCart ? null :(
        <div>
          {cartItems.length === 0 ? (
            null
            ) : (        
            (
              <main className="cart__wrapper">
                <div style={{ textAlign: "right" }}>
                  <CloseIcon
                    style={{ cursor: "pointer" }}
                    className="Close-Icon"
                    aria-hidden="true"
                    onClick={showHideCart}
                  />
                </div>
                <div className="cart__innerWrapper">
                  {cartItems.length === 0 ? (
                    null
                  ) : (
                    <ul>
                      {cartItems.map((item) => (
                        <li className="CartItem__item">
                          <img src={item.image} alt="" />
                          <div>
                            {item.name} , {item.price} $
                          </div>
                          <button
                            className="CartItem__button"
                            onClick={() => removeItem(item._id)}
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>  
                <div className="Cart__cartTotal">
                  <div>Total Price : </div>
                  <div style={{ marginLeft: 5 }}>{totalPrice.toFixed(2)}</div>
                </div>
              </main>
            )
          )}
        </div>
      )    
      }
      
    </section>
  );
};

export default Cart;
