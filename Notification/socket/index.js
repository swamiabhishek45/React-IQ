import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:5173",
    }
});

io.on("connection", (socket) => {
    console.log("Someone is connected!!");

    socket.on("disconnect", () => {
        console.log("Someone is disconnected!!");
    })
});

io.listen(5000);
