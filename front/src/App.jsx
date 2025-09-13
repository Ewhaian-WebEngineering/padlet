import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QnaPage from "./pages/qnaPage/QnaPage";
import IntroPage from "./pages/introPage/IntroPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/qna" element={<QnaPage />} />
        <Route path="/intro" element={<IntroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
