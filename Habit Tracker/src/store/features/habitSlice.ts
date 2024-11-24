import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    isLoading: boolean;
    error: string | null;
}

const initialState: HabitState = {
    habits: [],
    isLoading: false,
    error: null,
}; 

export const fetchHabits = createAsyncThunk("habits/fetchHabits", async () => {
    // simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockHabits: Habit[] = [
        {
            id: "1",
            name: "Reading",
            frequency: "daily",
            completedDates: [],
            createdAt: new Date().toISOString(),
        },
        {
            id: "2",
            name: "Jogging",
            frequency: "daily",
            completedDates: [],
            createdAt: new Date().toISOString(),
        },
    ];
    return mockHabits;
});

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchHabits.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchHabits.fulfilled, (state, action) => {
                state.isLoading = false;
                state.habits = action.payload;
            })
            .addCase(fetchHabits.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "failed to fetch habits";
            });
    },
});

export const { addHabit, toggleHabit, deleteHabit } = habitSlice.actions;

export default habitSlice.reducer;
