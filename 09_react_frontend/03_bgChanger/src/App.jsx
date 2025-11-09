import { useEffect, useState } from "react"

function App() {
  const [color, setColor] = useState("white")

  console.log("THis is rendered every time")
  useEffect(()=>{
      console.log("fiest time render and then only re-render when the dependency cnages")
      document.body.style.backgroundColor = color
  },[color])
  

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center space-y-6">
      <p className="text-2xl font-semibold text-gray-800">
        Click on the button to change the color
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg shadow"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
      </div>
    </div>
  )
}

export default App
