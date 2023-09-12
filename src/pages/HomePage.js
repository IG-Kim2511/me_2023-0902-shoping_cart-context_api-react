// HomePage.js
import React, { useContext, useState } from 'react'
import  "./HomePage.css"
import products from '../constants/data'
import ProductCard from '../components/ProductCard'


const HomePage = () => {

  
  return (
    <div>       

        <main className="products__wrapper">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>    
            ))}            
        </main>
    </div>
  )
}

export default HomePage


