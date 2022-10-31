/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "./components/Sidebar";
import ButtonUp from "./components/buttonGoUp";
import HelpButton from "./components/HelpButton";
import "./components/AppIn.css";
import Home from "./components/Contents/Home";
import About from "./components/Contents/About";
import Services from "./components/Contents/Services";
import Works from "./components/Contents/Works";
import Contact from "./components/Contents/Contact";
import Footer from "./components/Contents/Footer";

function App() {
  return (
    <div className="w-screen">
      <Home />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
      <HelpButton />
      <Sidebar />
      <ButtonUp />
    </div>
  );
}

export default App;
