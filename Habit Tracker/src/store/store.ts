import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import habitReducer from "./features/habitSlice";

const rootReducer = combineReducers({
    counter: counterReducer,
    habits: habitReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
