import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1, // feature
        decrement: (state) => state - 1, // feature
    },
});

export const { increment, decrement } = counterSlice.actions; // actions

export default counterSlice.reducer; // reducer
