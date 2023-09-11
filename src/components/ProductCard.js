import React, { useContext } from 'react'
// context
import CartContext from '../context/cart/CartContext'
import Rating from './Rating'

import './ProductCard.css'
import CartContext2 from '../context/CartContext2'



// 👉HomePage.js
const ProductCard = ({product}) => {

  const {addToCart} = useContext(CartContext)
  
  
  const {test2,addToCart2, cartItems2} = useContext(CartContext2)

  return (
    <div>
      ProductCard  {test2}  
        <main className="productCart__wrapper">
            <img src={product.image}/>
            <h4>{product.name}</h4>
            <div>
              <h5>$ {product.price}</h5>
            </div>
            <div>
              <Rating/>
            </div>
            
            <button  onClick={() => addToCart2(product) }>
            add to cart
            </button>

          
        </main>
    </div>
  )
}

export default ProductCard