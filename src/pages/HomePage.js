// HomePage.js
import React, { useContext, useState } from 'react'
import products from '../constants/data'
import ProductCard from '../components/ProductCard'
import TestContext from '../context/TestContext'


const HomePage = () => {

  const {test,setTest} = useContext(TestContext);
  
  return (
    <div>
        HomePage {test}

        <button onClick={()=>setTest("hi4 test")}>test context</button>
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


