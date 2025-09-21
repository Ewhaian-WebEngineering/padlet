import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QnaPage from "./pages/qnaPage/QnaPage";
import LoginPage from "./pages/loginPage/LoginPage";
import LoginLoadPage from "./pages/loginPage/LoginLoadPage";
import EventPage from "./pages/eventPage/EventPage.jsx";
import DetailModal from "./components/common/DetailModal.jsx";
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
        <Route path="/login/load" element={<LoginLoadPage/>}/>
        <Route path="/event-info" element={<EventPage />} />
        <Route path="/detailmodal" element={<DetailModal />} />
      </Routes>
    </Router>
  );
}

export default App;
