import React, { useContext } from 'react'
// context

import Rating from './Rating'

import './ProductCard.css'
import CartContext from '../context/CartContext'



// 👉HomePage.js
const ProductCard = ({product}) => {
 
  
  const {test,addToCart, cartItems} = useContext(CartContext)

  return (
    <div>
      ProductCard  {test}  
        <main className="productCart__wrapper">
            <img src={product.image}/>
            <h4>{product.name}</h4>
            <div>
              <h5>$ {product.price}</h5>
            </div>
            <div>
              <Rating/>
            </div>
            
            <button  onClick={() => addToCart(product) }>
            add to cart
            </button>

          
        </main>
    </div>
  )
}

export default ProductCard