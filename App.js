import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import Footer from "./Footer";


const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Header title="Projects" />} />
      <Route path="/about" element={<Header title="About" />} />
      <Route path="/newsletter" element={<Header title="Newsletter" />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
