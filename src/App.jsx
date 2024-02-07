import React from "react";
import Header from "./components/Header";
import CTAsection from "./components/CTAsection";
import Services from "./components/Services";
import Talent from "./components/Talent";
import TrendingServices from "./components/TrendingServices";
import LatestProject from "./components/LatestProject";
import Testimonial from "./components/Testimonial";
import Marketplace from "./components/Marketplace";
import OurBlog from "./components/OurBlog";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <CTAsection />
      <Services />
      <Talent />
      <TrendingServices/>
      <LatestProject />
      <Testimonial />
      <Marketplace />
      <OurBlog />
      <DownloadApp />
      <Footer/>
    </>
  );
}

export default App;
