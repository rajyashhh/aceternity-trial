import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Useref explained 
  const inputRef = useRef();
  function inputHandler () {
    inputRef.current.focus();
  }

  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder='name'></input>
        <input type="password" placeholder='password'></input>
        <button onClick={inputHandler}>Enter</button>
      </div>
    </>
  )
}

export default App
