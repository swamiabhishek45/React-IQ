import { Container, Typography } from "@mui/material";
// import "./App.css";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
import HabitStats from "./components/HabitStats";

function App() {

    return (
        <>
            <Container maxWidth="md">
                <Typography align="center" variant="h2" component="h1">
                    Habit Tracker
                </Typography>
                <AddHabitForm />
                <HabitList />
                <HabitStats />
            </Container>
        </>
    );
}

export default App;
