import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface Habit {
    id: number;
    name: string;
    frequency: "daily" | "weekly" | "monthly";
    completedDates: string[];
    createdAt: string;
}

// Define the initial state using that type
export interface HabitState {
    habits: Habit[];
}

const initialState: HabitState = {
    habits: [],
};

export const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        addHabit: (
            state,
            action: PayloadAction<{
                name: string;
                frequency: "daily" | "weekly" | "monthly";
            }>
        ) => {

            const newHabit: Habit = {
                id: state.habits.length + 1,
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString(),
            };
            state.habits.push(newHabit);
        },
    },
});

export const { addHabit } = habitSlice.actions;

export default habitSlice.reducer;
