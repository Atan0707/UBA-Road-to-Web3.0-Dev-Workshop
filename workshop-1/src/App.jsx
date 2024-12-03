import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './pages/Counter';
import Home from './pages/Home';
import ApiDemo from './pages/API';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/api-demo" element={<ApiDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;