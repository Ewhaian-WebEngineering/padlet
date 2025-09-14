import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QnaPage from "./pages/qnaPage/QnaPage";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/qna" element={<QnaPage />} />
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
