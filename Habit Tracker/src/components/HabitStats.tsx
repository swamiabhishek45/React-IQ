import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchHabits, Habit } from "../store/features/habitSlice";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";

const HabitStats: React.FC = () => {
    const { habits, isLoading, error } = useAppSelector(
        (state) => state.habits
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchHabits());
    }, []);

    const getCompletedToday = () => {
        const today = new Date().toISOString().split("T")[0];
        return habits.filter((habit) => habit.completedDates.includes(today))
            .length;
    };

    const getStreak = (habit: Habit) => {
        let streak = 0;
        const currentDate = new Date();

        while (true) {
            const dateString = currentDate.toISOString().split("T")[0];

            if (habit.completedDates.includes(dateString)) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }

        return streak;
    };

    const getLongestStreak = () => {
        return Math.max(...habits.map(getStreak), 0);
    };

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    minHeight: "100vh",
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Paper elevation={2} sx={{ mt: 4, p: 2 }}>
            <Typography variant="h6" gutterBottom>
                Habit Statistics
            </Typography>
            <Typography variant="body1">
                Total Habits: {habits.length}
            </Typography>
            <Typography variant="body1">
                Completed Today: {getCompletedToday()}
            </Typography>
            <Typography variant="body1">
                Longest Streak: {getLongestStreak()}
            </Typography>
        </Paper>
    );
};

export default HabitStats;
