import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Market } from "./pages/Market";
import { AboutUs } from "./pages/AboutUs";
import { Contact } from "./pages/Contact";

import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
