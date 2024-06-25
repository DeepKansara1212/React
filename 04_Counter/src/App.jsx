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
      // setCounter(counter + 1) 

      // When we write this type of code, then also value of counter is incrimented by 1
      // setCounter(counter + 1) 
      // setCounter(counter + 1) 
      // setCounter(counter + 1) 
      // setCounter(counter + 1) 

      // So by increasing the counter value, we have to write them as a callback function

      // setCounter(() => {}) -> Callback function is already inside of the setCounter method, but it is work behind the scene.

      setCounter(prevCounter => prevCounter + 1) 
      setCounter(prevCounter => prevCounter + 1) 
      setCounter(prevCounter => prevCounter + 1) 
      setCounter(prevCounter => prevCounter + 1) 

      // Now at the end of the code it will increment the counter value by 4
      // So 5, 9, 13, 17, ...
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
