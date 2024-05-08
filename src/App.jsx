import { useState } from 'react'
import './App.css'
import { Home } from './Components/Pages/Home/Home'
Home

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
