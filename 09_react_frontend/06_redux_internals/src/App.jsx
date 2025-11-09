import Counting from "./pages/Counting"
import InputIncrCounter from "./pages/inputIncrCounter"


function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center space-y-6">
        <Counting/>
        <InputIncrCounter/>
    </div>
  )
}
export default App