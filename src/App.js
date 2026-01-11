import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Aboutus";
import Services from "./pages/Services";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contactus />} />
    </Routes>
  );
}

export default App;
