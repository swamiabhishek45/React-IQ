import React from "react";
import { useAppSelector } from "../hooks";
import { Box, Grid } from "@mui/system";
import { Button, Paper, Typography } from "@mui/material";
import  CheckCircleIcon  from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const HabitList: React.FC = () => {
    const { habits } = useAppSelector((state) => state.habits);

    const today = new Date().toISOString().split("T")[0];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                mt: "1rem",
            }}
        >
            {habits.map((habit) => {
                return (
                    <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
                        <Grid container alignItems="center">
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h6">
                                    {habit.name}
                                </Typography>
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
                                    >
                                        {habit.completedDates.includes(today)
                                            ? "Completed"
                                            : "Mark as Complete"}
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                );
            })}
        </Box>
    );
};

export default HabitList;