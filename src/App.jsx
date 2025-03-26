import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
