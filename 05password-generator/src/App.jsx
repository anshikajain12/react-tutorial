import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLenth] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charaterAllowed, setCharaterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //use ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYSabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charaterAllowed) str += "!@#$%^&*()_+~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charaterAllowed, setPassword]
  )
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length)
    window.navigator.clipboard.writeText(password)

  }, [password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charaterAllowed, passwordGenerator])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500 '>
      {/* H1heading */}
      <h1 className='text-center text-white my-3'>Password Generator</h1>
      {/* text input */}
      <div className='flex shadow-sm rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef} />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-cyan-600 cursor-pointer'
          onClick={copyPasswordToClipBoard}>Copy</button>
      </div>

      {/* length input */}
      <div className='flex text-sm gap-x-2'>
        <div className='flex itmes-center gap-x-1'>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => { setLenth(e.target.value) }}
            className='cursor-pointer' />
          <label>Length:{length}</label>
        </div>
        {/* number input */}
        <div className='flex itmes-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => { setNumberAllowed((prev) => !prev) }}
            className='cursor-pointer' />
          <label htmlFor='numberInput'>Number</label>
        </div>
        {/* character input */}
        <div className='flex itmes-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charaterAllowed}
            id="characterInput"
            onChange={() => { setCharaterAllowed((prev) => !prev) }}
            className='cursor-pointer' />
          <label htmlFor='characterInput'>Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
