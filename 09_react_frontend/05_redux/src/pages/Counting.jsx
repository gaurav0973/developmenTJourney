import {useSelector, useDispatch} from "react-redux"
import { decrement, increment, reset } from "../state-management/slice1";

function Counting() {
    /*
    useSelector : to read data from the redux store
    - parameter = function
    - function parameter = state (global state from the store)
    - state = {
        slice1: {count: 0},
        slice2: {...},
        slice3: {...},
        ...
        sliceName : current slice state(initalState ke andar jo linka tha)
        }
    */
    const count = useSelector((state) => state.slice1.count);
    console.log("count from redux store :", count);
    const dispatch = useDispatch();
   return (
    <>
        <div className="flex flex-col justify-center items-center h-screen text-center space-y-6 bg-gray-50">
            <h1 className="text-3xl font-bold text-blue-600">Counter : {count}</h1>
            <div className="space-x-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors shadow-sm font-medium"
                onClick={()=> dispatch(increment())}>
                  Increment
                </button>
            </div>
            <div>
                <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-500 transition-colors shadow-sm font-medium"
                onClick={()=> dispatch(decrement())}>
                  Decrement
                </button>
            </div>
            <div>
                <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors shadow-sm font-medium"
                onClick={()=> dispatch(reset())}>
                  Reset
                </button>
            </div>
        </div>
    </>
  )
}
export default Counting