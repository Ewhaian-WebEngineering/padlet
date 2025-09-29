import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useUserStore from "./store/useUserStore.js";
import QnaPage from "./pages/qnaPage/QnaPage";
import LoginPage from "./pages/loginPage/LoginPage";
import LoginLoadPage from "./pages/loginPage/LoginLoadPage";
import EventPage from "./pages/eventPage/EventPage.jsx";
import DetailModal from "./components/common/DetailModal.jsx";
import { useEffect } from "react";
import AskModal from "./components/common/AskModal.jsx";
import { Navigate } from "react-router-dom";

function App() {
  const { fetchUser, userName, loading } = useUserStore();
  useEffect(() => {
    // 앱 시작 시 세션 확인
    fetchUser();
  }, [fetchUser]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            loading || userName === undefined ? ( // undefined로 초기화하는 방법도 좋음
              <div>Loading...</div>
            ) : userName ? (
              <Navigate to="/event-info" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/qna" element={<QnaPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/load" element={<LoginLoadPage />} />
        <Route path="/event-info" element={<EventPage />} />
        {/* <Route path="/askmodal" element={<AskModal />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
