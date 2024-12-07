import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // react hook
  let counter1 = 0; // tak guna hook

  const handleClick = () => {
    counter1++;
    console.log("Without react: ", counter1)
  }

  const handleClick2 = () => {
    setCount(count + 1);
    console.log("With react = ", count);
  }

  return (
    <div className="app">
      <button onClick={handleClick}>
        Tanpa React
      </button>
      <button onClick={handleClick2}>
        With React
      </button>
      <p className='text-red-700'>Tanpa React = {counter1}</p>
      <p>With React = {count}</p>
    </div>
  )
}

export default App
