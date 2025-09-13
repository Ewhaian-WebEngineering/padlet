import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QnaPage from "./pages/qnaPage/QnaPage";
import EventPage from "./pages/eventPage/EventPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/qna" element={<QnaPage />} />
        <Route path="/event-info" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
