import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () => {
    // console.log("value added", Math.random()); 
    // console.log("clicked", Math.random()); 
    console.log("clicked", counter); 

  // 1 Tarika

    // counter = counter+1;
    // console.log(counter);
    // setCounter(counter)

  // Badhane me bina condition ke sath
    //setCounter(counter+1)

  // Badhane me condition ke sath
    if(counter<20) {
    setCounter(counter+1)
    }
    else {
      console.log("Limit is set at 20")
      setCounter("Limit is set at 20")
    }
  }

  const removeValue = () => {
  // Ghatana bina condition ke
    //setCounter(counter-1)

  // Ghatane me condition ke sath
     if(counter>0) {
     setCounter(counter-1)
     }
     else {
      console.log("Limit is set at 0")
      setCounter("Limit is set at 0")
     }
  }
  
  return (
    <>
      <h1>hi harsh aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br/>
      <button
      onClick={removeValue}
      >Delete Value</button>
    </>
  )
}

export default App
