import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Nav = () => {
    const {cartItems, showHideCart} =  useContext(CartContext)  
  return (
    <nav>
        <div>Store</div>
        <div>
            <div>
                <input text='text'/>
                <SearchIcon/>
                
            </div>
        </div>
        <div>
        <div className="cart_icon" onClick={showHideCart}>
            <ShoppingCartIcon/>
            {cartItems.length >0 && (
                <div>
                <span>{cartItems.length}</span>
                </div>
            )}

        </div>
        </div>
    </nav>
  )
}

export default Nav