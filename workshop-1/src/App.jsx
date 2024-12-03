import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './pages/Counter';
import Home from './pages/Home';
import ApiDemo from './pages/API';

function App() {
const [count, setCount] = useState(0);
let count1 = 1;

// this one without react
function increment (  ) {
  count1 = count1 + 1;
  console.log(count1);
}

// this one with react
const increment2 = () => {
  setCount(count + 1);
  console.log(count);
}

useEffect(() => {
  console.log("count increased");
}, [count]);

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