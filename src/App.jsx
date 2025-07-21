import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Elements from "./pages/Elements";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {


  return (
    <div className="h-full">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <div className="min-h-[60%]">
          <div className="pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/elements" element={<Elements />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          </div>
        </div>
      
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
