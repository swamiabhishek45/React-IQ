import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Box, Grid } from "@mui/system";
import { Button, LinearProgress, Paper, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteHabit, Habit, toggleHabit } from "../store/features/habitSlice";

const HabitList: React.FC = () => {
    const { habits } = useAppSelector((state) => state.habits);

    const today = new Date().toISOString().split("T")[0];

    const dispatch = useAppDispatch();

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

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                mt: "1rem",
            }}
        >
            {habits.map((habit, index) => {
                return (
                    <Paper key={index} elevation={2} sx={{ p: 2 }}>
                        <Grid container alignItems="center">
                            <Grid size={{ xs: 12, md: 6 }}>
                                {habit.completedDates.includes(today) ? (
                                    <Typography
                                        variant="h6"
                                        sx={{ textDecoration: "line-through" }}
                                    >
                                        {habit.name}
                                    </Typography>
                                ) : (
                                    <Typography variant="h6">
                                        {habit.name}
                                    </Typography>
                                )}

                                <Typography
                                    variant="body1"
                                    color="textSecondary"
                                    sx={{ textTransform: "capitalize" }}
                                >
                                    {habit.frequency}
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        gap: 1,
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        color={
                                            habit.completedDates.includes(today)
                                                ? "success"
                                                : "primary"
                                        }
                                        startIcon={<CheckCircleIcon />}
                                        onClick={() =>
                                            dispatch(
                                                toggleHabit({
                                                    id: habit.id,
                                                    date: today,
                                                })
                                            )
                                        }
                                    >
                                        {habit.completedDates.includes(today)
                                            ? "Completed"
                                            : "Mark as Complete"}
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                        onClick={() =>
                                            dispatch(
                                                deleteHabit({ id: habit.id })
                                            )
                                        }
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                Current Streak: {getStreak(habit)} days
                            </Typography>

                            <LinearProgress
                                sx={{ mt: 1 }}
                                variant="determinate"
                                value={(getStreak(habit) / 30) * 100}
                            />
                        </Box>
                    </Paper>
                );
            })}
        </Box>
    );
};

export default HabitList;
