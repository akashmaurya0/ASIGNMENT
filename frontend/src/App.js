import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

import Blogs from "./components/Blogs";   
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
     <Slider/>
     <Footer/>
    </>
  );
}

export default App;
