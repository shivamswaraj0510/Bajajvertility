import { Routes, Route } from "react-router-dom";
import About from "./pages/about_us";
import Home from "./pages/homepage";
import Bookappointment from "./pages/book_appointment";
import FindDoctor from "./pages/findDoctor";
import Healthpackage from "./pages/healthpackage";
// import Contact from "./pages/contact"; // ✅ Make sure this file exists

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/book_appointment" element={<Bookappointment />} />
        <Route path="/Healthpackage" element={<Healthpackage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
