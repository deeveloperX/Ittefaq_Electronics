import { Routes, Route } from "react-router-dom";
import PreHeader from './components/PreHeader'
import MainHeader from './components/MainHeader'
import PostHeader from './components/PostHeader'
import Category from "./pages/Category";
import Brand from "./pages/Brand";
import ScrollToTop from "./components/ScrollToTop";
// import './App.css'

import Home from "./pages/Home";
import About from "./pages/About";
import StoreLocation from "./pages/StoreLocation";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <ScrollToTop/>
      
      <PreHeader/>
      <MainHeader/>
      <PostHeader/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store-location" element={<StoreLocation />} />
        <Route path="/category/:categorySlug" element={<Category />} />
        <Route path="/category/:categorySlug/:brandSlug" element={<Category />} />
        <Route path="/brands/:brandSlug" element={<Brand />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App
