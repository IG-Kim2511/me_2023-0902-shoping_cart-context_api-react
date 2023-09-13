import React, { useContext } from "react";
import "./Nav.css";
import CartContext from "../context/CartContext";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


// 
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);
  
  return (
    <nav>
      <div className="nav__left">Secondhand Store</div>
      <main className="nav__middle">
        <div className="input__wrapper">
          <input text="text" />
          <SearchIcon />
        </div>
      </main>
      <main className='nav__right'>
        <div className="cart_icon" onClick={showHideCart}>
        
      {/*     <ShoppingCartIcon />

          <span className="item__count">
            {cartItems.length}
          </span> */}

          <Stack spacing={3} direction="row" className="item__count">    
            <Badge color="secondary" overlap="circular" badgeContent={cartItems.length} className="badge">
            <ShoppingCartIcon />
              
            </Badge>         
          </Stack>
 
        </div>
      </main>
    </nav>
  );
};

export default Nav;

// <div className='item__count'>
// <span>{cartItems.length}</span>
// </div>

// {/* 🍀Array.length */}
// {cartItems.length > 0 && (
// <div className='item__count'>
//   <span>{cartItems.length}</span>
// </div>
// )}