import React from "react";
import AllComponets from "./components/AllComponets";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductSingle from "./components/ProductSingle";
import Projects from "./components/Projects";
import ProjectSingle from "./components/ProjectSingle";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import { NavbarComponent } from "./components/NavbarComponent";
import Help from "./components/Help";
import Terms from "./components/Terms";

function App() {
  return (
    <>
    {/* <Header /> */}
    <NavbarComponent />
      <Routes>
        <Route path="/" element={<AllComponets />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductSingle />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectSingle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/terms" element={<Terms />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
