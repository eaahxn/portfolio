import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App
