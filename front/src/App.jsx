import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QnaPage from "./pages/qnaPage/QnaPage";
import EventPage from "./pages/eventPage/EventPage.jsx";
import AskModal from "./components/common/AskModal.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/qna" element={<QnaPage />} />

        <Route path="/event-info" element={<EventPage />} />

        <Route path="/askmodal" element={<AskModal />} />
      </Routes>
    </Router>
  );
}

export default App;
