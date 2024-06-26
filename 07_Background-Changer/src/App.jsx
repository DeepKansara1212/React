import { useState } from 'react'


function App() {

  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }} >

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2'>

          <button 
            onClick={() => setColor("red")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "red" }}>Red</button>
          <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "blue" }}>Blue</button>
          <button
            onClick={() => setColor("darkgoldenrod")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "darkgoldenrod" }}>Darkgoldenrod</button>
          <button 
            onClick={() => setColor("purple")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "purple" }}>Purple</button>
          <button 
            onClick={() => setColor("burlywood")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "burlywood" }}>Burlywood</button>
          <button 
            onClick={() => setColor("chocolate")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "chocolate" }}>Chocolate</button>
          <button 
            onClick={() => setColor("cornflowerblue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "cornflowerblue" }}>Cornflowerblue</button>
          <button 
            onClick={() => setColor("orangered")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "orangered" }}>Orangered</button>
          <button 
            onClick={() => setColor("mediumslateblue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "mediumslateblue" }}>Mediumslateblue</button>
          <button 
            onClick={() => setColor("hotpink")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "hotpink" }}>Hotpink</button>
        </div>
      </div> 
    </div>
  )
}

export default App
