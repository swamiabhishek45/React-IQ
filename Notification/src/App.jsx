import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";

function App() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState("");

    console.log(user);

    return (
        <>
            <div className="container">
                {user ? (
                    <>
                        <Navbar />
                        <Card />
                        <span className="username">{username}</span>
                    </>
                ) : (
                    <div className="login">
                      <h1>Login</h1>
                        <input
                            type="text"
                            placeholder="Enter username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <button onClick={() => setUser(username)}>Login</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
