import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import CartItems from './CartItems'

const Cart = () => {

    
    const {showCart, cartItems, showHideCart} = useContext(CartContext)

    console.log(showCart)

  return (
    <div>Cart
        {
            showCart ?(
                <div>none showCart</div>
            )
            : (
                <main>
                    <div>

                    </div>
                    <div>
                        {
                            cartItems.length ===0?
                            (<h4>empty</h4>)
                            :(
                                <ul>
                                {
                                    cartItems.map((item)=>(
                                        <CartItems key={item.id} item={item}/>
                                    ))
                                }
                                </ul>
                            )



                            

                        }
                    </div>

                    <div>
                        <div>Cart Total</div>
                        <div style={{marginLeft:5}}>
                        
                        {cartItems.map((item)=>(
                            item.price
                        ))}
                        
                        </div>
                    </div>
                
                </main>
            )


        }
    
    </div>
  )
}

export default Cart

