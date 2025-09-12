import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import './css/reset.css'
import './css/fonts.css'
import './css/layout.css'
import './css/main.css'

function App() {
  return (
    <Router basename="/portfolio">
      <Header />
      <main>
        <Routes>
          {/* 기본 진입 시 /work로 리다이렉트 */}
          <Route path="/" element={<Navigate to="/work" replace />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
