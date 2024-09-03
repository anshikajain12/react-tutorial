import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const decreaseCounter = () => {
    console.log("Decrease button Clciked", count)
    if (count > 0) { setCount(count - 1); }
  }

  return (
    <>
      <h1>Counter Page</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={() => {
        console.log("Increase button Clciked", count)
        setCount(count + 1)
      }}>Increment</button>
      <br />
      <button onClick={decreaseCounter}>Decreament</button>
      <footer>counter latest value: {count}</footer>
    </>
  )
}

export default App
