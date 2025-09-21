// socket을 사용하기 위한 초기화 코드
import { Server } from "socket.io";

let io;
export const initSocket = (server) => {
  io = new Server(server, {
    cors: { origin:  process.env.FRONTEND_URL, credentials:true }
  });

  io.on("connection", (socket) => {
    //서버 연결됐는지 확인하는 코드
    socket.on("ping", (msg) => {
      console.log("클라이언트에서 받은 ping:", msg);
      socket.emit("pong", "서버 응답: pong!");
    });
  });

  return io;
};

export const getIO = () => {
  if (!io) throw new Error("Socket.io가 아직 초기화 실패");
  return io;
};
