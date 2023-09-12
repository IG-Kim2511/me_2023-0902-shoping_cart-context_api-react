// HomePage.js
import React, { useContext, useState } from 'react'
import products from '../constants/data'
import ProductCard from '../components/ProductCard'


const HomePage = () => {

  
  return (
    <div>
        HomePage

        <br />
        <main className="products__wrapper">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>    
            ))}            
        </main>
    </div>
  )
}

export default HomePage


