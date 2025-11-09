import {createSlice} from '@reduxjs/toolkit';

const reactSlicer = createSlice({
    name: 'slice1',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        customIncrement: (state, action) => {
            state.count = state.count + action.payload;
        }   
    },
});
console.log("reactSlicer :", reactSlicer);
export const {increment, decrement, reset, customIncrement} = reactSlicer.actions;
export default reactSlicer.reducer;
