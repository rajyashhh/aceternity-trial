import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [value, setValue] = useState(0);
  const timer = useRef();
  function startTimer (){
    let value = setInterval(function(){
      setValue(x=>x+1)
    },1000)
    timer.current = value
  }
  function stopTimer (){
    clearInterval(timer.current)
  }
  return (
    <div>
      {value}
      <br></br>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
    
    
  )
}

export default App
