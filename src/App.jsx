import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Elements from "./pages/Elements";
import Blog from "./pages/Blog";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-32 min-h-44">
        {/* <Contact /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/elements" element={<Elements />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
