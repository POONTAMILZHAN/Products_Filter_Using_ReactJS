import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from '../Component/ProductCard'
import ProductPage from '../Component/ProductPage'
import SearchFilter from '../Component/SearchFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ProductCard/> */}
      <ProductPage />
     
    </>
  )
}

export default App
