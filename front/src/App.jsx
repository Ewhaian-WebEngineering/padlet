import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QnaPage from "./pages/qnaPage/QnaPage";
import LoginPage from "./pages/loginPage/LoginPage";
import EventPage from "./pages/eventPage/EventPage.jsx";
import { useEffect } from "react";
import socket from "../lib/socket.js";

function App() {
  useEffect(() => {
    
    //socket 연결됐는지 확인하는 코드
    socket.emit("ping", "클라이언트에서 보낸 ping!");
    socket.on("pong", (msg) => {
      console.log("서버 응답:", msg);
    });

    return () => {
      socket.off("pong");
    };
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/qna" element={<QnaPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/event-info" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
