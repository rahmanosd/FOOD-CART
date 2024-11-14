import './App.css'
import './Components/Banner/Banners'
import Banners from './Components/Banner/Banners'
import Navbar from './Components/Navbar/Navbar'
import Foods from './Components/Foods/Foods'
import Foodmarks from './Components/Foodmarks/Foodmarks'
import { useState } from 'react'
function App() {
  const [foodmarks, setFoodmarks] = useState([])
  const handleAddToFoodmark = food => {
    const newFoodmarks = [...foodmarks, food]
    setFoodmarks(newFoodmarks)
  }
  return (
    <>
      
    <Navbar></Navbar>
    <Banners></Banners>
    <div className='md:flex'>
    <Foods handleAddToFoodmark={handleAddToFoodmark}></Foods>
    <Foodmarks foodmarks={foodmarks}></Foodmarks>
    </div>
    </>
  )
}

export default App
