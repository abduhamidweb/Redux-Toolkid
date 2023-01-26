import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Router from "./router"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router/>
      <div className='container'>
        <h2>home</h2>
      </div>
    </>
  )
}

export default App
