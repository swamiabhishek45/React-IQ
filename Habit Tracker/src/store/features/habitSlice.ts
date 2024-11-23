import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface Habit {
    id: string;
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
                id: new Date().toISOString(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString(),
            };
            
            state.habits.push(newHabit);
        },

        toggleHabit: (
            state,
            action: PayloadAction<{ id: string; date: string }>
        ) => {
            const habit = state.habits.find((h) => h.id === action.payload.id);

            if (habit) {
                const index = habit.completedDates.indexOf(action.payload.date);
                if (index > -1) {
                    habit.completedDates.splice(index, 1);
                } else {
                    habit.completedDates.push(action.payload.date);
                }
            }
        },
        deleteHabit: (state, action: PayloadAction<{ id: string }>) => {
            state.habits = state.habits.filter(
                (habit) => habit.id !== action.payload.id
            );
        },
    },
});

export const { addHabit, toggleHabit, deleteHabit } = habitSlice.actions;

export default habitSlice.reducer;
