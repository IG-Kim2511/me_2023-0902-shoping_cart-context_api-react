import React from 'react'
import products from '../constants/data'
import ProductCard from '../components/ProductCard'


const HomePage = () => {
  return (
    <div>
        HomePage
        <main className="products__wrapper">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>    
            ))}            
        </main>
    </div>
  )
}

export default HomePage