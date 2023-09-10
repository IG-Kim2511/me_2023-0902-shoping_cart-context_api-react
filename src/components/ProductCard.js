import React, { useContext } from 'react'
// context
import CartContext from '../context/cart/CartContext'
import Rating from './Rating'

import './ProductCard.css'



// 👉HomePage.js
const ProductCard = ({product}) => {

  const {addToCart} = useContext(CartContext)
  
  
  return (
    <div>
      ProductCard
        <main className="productCart__wrapper">
            <img src={product.image}/>
            <h4>{product.name}</h4>
            <div>
              <h5>$ {product.price}</h5>
            </div>
            <div>
              <Rating/>
            </div>
            
            <button  onClick={() => addToCart(product)}>
            add to cart
            </button>


        </main>
    </div>
  )
}

export default ProductCard