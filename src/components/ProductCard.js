import React, { useContext } from 'react'
import './ProductCard.css'
import Rating from './Rating'


// context
import CartContext from '../context/CartContext'



// 👉HomePage.js
const ProductCard = ({product}) => {
 
  
  const {test,addToCart, cartItems} = useContext(CartContext)

  return (
    <div className='productCard__wrapper'>
      <div>
        <img className='productCard__img' src={product.image} alt='' />
        <h4>{product.name}</h4>
        <div className='ProductCard__price'>
          <h5>$ {product.price}</h5>
        </div>
        <div className='ProductCard__Rateing'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <button
          className='ProductCard__button'
          // 👉 dispatch
          onClick={() => addToCart(product)}
        >
          Add to basket
        </button>
      </div>
  </div>
  )
}

export default ProductCard