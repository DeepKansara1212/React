import { useState } from 'react'
import './App.css'

function App() {

  // React hook - useState()
  let [counter, setCounter] = useState(5) 
    // setCounter() is a method, runs on the counter variable

  // let counter = 5 

  const addValue = () => {
    // console.log("Clicked", counter);

    // counter = counter + 1 
    // setCounter(counter) 

    if (counter < 20) { 
      setCounter(counter + 1) 
    } 
  } 

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br /> 
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </> 
  )
}

export default App
