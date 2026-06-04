import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1)
  }

  function decrement(){
    setCount(count - 1)
  }

  function jumpBy5(){
    setCount(count+5)
  }

  function fallBy5(){
    setCount(count-5)
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={jumpBy5}>Jump By 5</button>
      <button onClick={fallBy5}>Fall By 5</button>
    </div>
  );
}

export default App;
