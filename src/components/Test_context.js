import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'



const Test = () => {

    const {cartItems,test} = useContext(CartContext);
  return (
    <div>
        {cartItems}
        <br />
        {test}
    </div>
  )
}

export default Test