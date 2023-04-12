import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
const Higher = (Component) =>
  function HOC() {
    return (
      <div className="app">
        <Navbar />
        <Component />
        <Footer />
      </div>
    );
  };

export default Higher;
