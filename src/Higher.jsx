import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
function Higher(Component) {
  return function HOC() {
    return (
      <div className="app">
        <Navbar />
        <Component />
        <Footer />
      </div>
    );
  };
}

export default Higher;
