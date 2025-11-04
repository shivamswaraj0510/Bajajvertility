import { Routes, Route } from "react-router-dom";
import About from "./pages/about_us";
import Home from "./pages/homepage";
// import Contact from "./pages/contact"; // ✅ Make sure this file exists

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
// 