import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx';
import Card1 from './components/Card1.jsx';

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Anshika",
    age: 21
  }
  let myArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Miss. Anshika" someObj={myObj} newArr={myArr} />
      <Card1 username="Anshika" btnText="click me to Read more"/>
    </>
  )
}

export default App
