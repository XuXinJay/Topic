import React from "react";
import Accordion from "../aboutUsPages/Accordion";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Accordion1() {
  return (
    <div>
      <Header />
      <div className="change">
        <Accordion />
      </div>
      <Footer />
    </div>
  );
}

export default Accordion1;
