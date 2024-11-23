import { Container, Typography } from "@mui/material";
// import "./App.css";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";

function App() {

    return (
        <>
            <Container maxWidth="md">
                <Typography align="center" variant="h2" component="h1">
                    Habit Tracker
                </Typography>
                <AddHabitForm />
                <HabitList />
            </Container>
        </>
    );
}

export default App;
