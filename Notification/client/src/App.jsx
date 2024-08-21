import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import { posts } from "./data";
import { io } from "socket.io-client";

function App() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {
        const socket = io("http://localhost:5000");
    },[])

    return (
        <>
            <div className="container">
                {user ? (
                    <>
                        <Navbar />
                        {posts.map((post) => (
                            <Card key={post.id} post={post} />
                        ))}
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
