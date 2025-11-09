import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./slice1";

// store => match slice and reducers here
// formate : sliceName(written in slice1 name field): sliceReducer(imported from slice file)
// global store with all the slices combined
const store = configureStore({
    reducer: {
        slice1: slice1Reducer,
    },
});


export default store;