import { useState } from "react"

function App() {

  let [count, setCount] = useState(0)
  function handleIncrement(){
    count++
    setCount(count)
  }
  function handleDecrement(){
    count--
    setCount(count)
  }
  return (
    <div className="flex justify-center items-center h-screen text-center">
      <div>
          <p>count = {count}</p>
          <div>
            <button onClick={handleIncrement}>Increment</button>
          </div>
          <div>
            <button onClick={handleDecrement}>Decrement</button>
          </div>

      </div>
    </div>
  )
}

export default App
