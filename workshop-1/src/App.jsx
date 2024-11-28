import { useState } from 'react';

function App() {
const [count, setCount] = useState(0);
let count1 = 1;

function increment () {
  count1 = count1 + 1;
  console.log(count1);
}

const increment2 = () => {
  setCount(count + 1);
  console.log(count);
}

  return (
    <div className=" items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">
        Hello World
      </h1>
      <button onClick={increment}>click this</button>
      <br />
      <button onClick={increment2}>click this (useste)</button>
       <p>without useState: {count1}</p>
      <p>With useState: {count}</p>
    </div>
  );
}

export default App;