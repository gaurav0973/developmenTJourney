import {useSelector, useDispatch} from "react-redux"
import { decrement, increment, reset } from "../state-management/slice1";

function Counting() {
    const count = useSelector((state) => state.slice1.count);
    // console.log("count from redux store :", count);
    const dispatch = useDispatch();
    // console.log(dispatch)   
    // console.log(increment())  //type : {type: 'slice1/increment', payload: undefined}
    // console.log(dispatch(increment())) => will go in infinite loop if used here => function component re-renders again and again
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