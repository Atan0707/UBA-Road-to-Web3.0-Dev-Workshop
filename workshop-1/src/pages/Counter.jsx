import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <h1 className="text-3xl font-bold mb-8">
        Workshop 1 - Introduction to React
      </h1>
      
      <div className="flex flex-col items-center gap-4">
        <p className="text-6xl font-bold">{count}</p>
        
        <div className="flex gap-4">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
          >
            Decrease
          </button>
          
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
          >
            Increase
          </button>
        </div>

        <div className="mt-8 text-left">
          <h2 className="text-xl font-bold mb-4">What's happening here?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We use <code className="bg-slate-800 px-1 rounded">useState</code> to create a count variable</li>
            <li>The count value is displayed in the UI</li>
            <li>Buttons trigger functions that update the state</li>
            <li>React automatically re-renders when state changes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Counter;