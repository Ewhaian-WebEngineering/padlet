import { io } from "socket.io-client";
const BACK_PORT = import.meta.env.VITE_PORT;

const socket = io(`http://localhost:${BACK_PORT}`, {
    withCredentials: true,
});

export default socket;