import React from "react";
import Header from "./component/Header";
import "./assest/css/index.css";
import HomeScreenSlider from "./component/HomeScreenSlider";
import AboutUs from "./component/AboutUs";
import BlogSection from "./component/BlogSection";
import GallerySection from "./component/GallerySection";
import ClientSection from "./component/ClientSection";
import InfoSection from "./component/InfoSection";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="hero_area">
      <Header />
      <HomeScreenSlider />
      <AboutUs />
      <GallerySection />
      <BlogSection />
      <ClientSection />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default App;
