/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // let myObj = {
  //   username: "Deep",
  //   age: 21
  // }

  // let newArray = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      {/* <Card channel="abc" someObj={myObj} />
      <Card channel="abc" someArr={newArray} /> */}

      <Card username="Chai Aur Code" btnText="Click Me" /> 
      <Card username="Deep" btnText="Visit Me" /> 
      <Card /> 
    </>
  )
}

export default App
