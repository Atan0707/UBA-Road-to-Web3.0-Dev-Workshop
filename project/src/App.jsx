import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './pages/Counter'
import Todolist from './pages/Todolist'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path='/todolist' element={<Todolist />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
