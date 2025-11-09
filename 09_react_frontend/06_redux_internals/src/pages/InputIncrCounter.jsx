import { useState } from "react";
import { useDispatch } from "react-redux";
import { customIncrement } from "../state-management/slice1";

function InputIncrCounter() {

    const [number, setNumber] = useState(0);
    const dispatch = useDispatch()

    function handleIncrementByInputValue() {
        dispatch(customIncrement(parseInt(number)))
    }
  return (
    <>
        <div className=" flex flex-col justify-center items-center h-screen text-center space-y-6 bg-gray-50">
            <div className="space-x-4">
                <input type="number" name="number" id="number" 
                value={number} onChange={(e)=> setNumber(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2"/>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors shadow-sm font-medium"
                onClick={handleIncrementByInputValue}>
                    Increment Counter by Input Value
                </button>
            </div>
        </div>
    </>
  )
}
export default InputIncrCounter