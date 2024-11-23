import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import { addHabit } from "../store/features/habitSlice";

const AddHabitForm: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">(
        "daily"
    );

    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name) return;
        dispatch(addHabit({ name, frequency }));
        setName("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Habit Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Habit Name"
                />

                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select
                        value={frequency}
                        label="Frequency"
                        onChange={(e) =>
                            setFrequency(
                                e.target.value as "daily" | "weekly" | "monthly"
                            )
                        }
                    >
                        <MenuItem value={"daily"}>Daily</MenuItem>
                        <MenuItem value={"weekly"}>Weekly</MenuItem>
                        <MenuItem value={"monthly"}>Monthly</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained">
                    Add Habit
                </Button>
            </Box>
        </form>
    );
};

export default AddHabitForm;
