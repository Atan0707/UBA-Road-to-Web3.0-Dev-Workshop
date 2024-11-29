import { useState, useEffect } from 'react'; // this one we call it hook
// useState is just like normal variable but it will re-render the component when the value is changed
// useEffect is just like automatic function that will run when the component is rendered


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
    <div className=" items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">
        Hello World
      </h1>
      <button onClick={increment}>click this</button> 
      {/* this one without react */}
      <br />
      <button onClick={increment2}>click this (useste)</button>
       <p>without useState: {count1}</p>
      <p>With useState: {count}</p>
    </div>
  );
}

export default App;