import React from "react";
import Introduce from "../aboutUsPages/Introduce";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Introduce1() {
  return (
    <div>
      <Header />
      <div className="change">
        <Introduce />
      </div>
      <Footer />
    </div>
  );
}

export default Introduce1;
