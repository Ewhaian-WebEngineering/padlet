import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QnaPage from "./pages/qnaPage/QnaPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/qna" element={<QnaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
