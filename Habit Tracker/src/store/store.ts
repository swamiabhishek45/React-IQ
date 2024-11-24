import { combineReducers, configureStore } from "@reduxjs/toolkit";
import habitReducer from "./features/habitSlice";

const rootReducer = combineReducers({
    habits: habitReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
