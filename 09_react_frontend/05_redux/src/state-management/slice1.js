import {createSlice} from '@reduxjs/toolkit';

const reactSlicer = createSlice({
    name: 'slice1',
    initialState: {
        count: 0
    },
    reducers: {
        // state = current state = {count: 0} = object which is written in initialState
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
        reset: (state) => {
            state.count = 0;
        },
    },
});

export const {increment, decrement, reset} = reactSlicer.actions;
export default reactSlicer.reducer;
