import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { decrement, increment } from "../store/features/counterSlice";

const Counter:React.FC = () => {
    const count = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

    return (
        <>
            <h1>Count is {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    );
};

export default Counter;
