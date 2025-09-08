import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './ProductCard.jsx'

function App() {
  return (
    <> 
      <h2 style={{ marginBottom: "2rem" }}>Products List</h2>
      <div style={{border: '5px solid white', padding: '10px', margin: '10px'}}>
        <ProductCard product={{ name: "Laptop", price: 999, status: "In Stock", description: "High performance laptop", image: "https://via.placeholder.com/150" }} />
        <ProductCard product={{ name: "Smartphone", price: 499, status: "Limited Stock", description: "Latest model smartphone", image: "https://via.placeholder.com/150" }} />
        <ProductCard product={{ name: "Headphones", price: 199, status: "Out of Stock", description: "Noise cancelling headphones", image: "https://via.placeholder.com/150" }} />
      </div>
    </>
  )
}


export default App
